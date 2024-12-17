import { showErrorNotif } from '@utils/index';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IResponseData<T = Record<string, any>> {
  success: boolean;
  message?: string;
  data?: T;
}

export const axiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true, // This is required to send cookies with the request
  });

  instance.interceptors.response.use(
    (response: AxiosResponse<IResponseData>) => {
      return Promise.resolve(response);
    },
    (error: AxiosError<IResponseData>) => {
      if (!error.response || !error.response.data) {
        showErrorNotif({ message: 'Server Connection is down' });
        return Promise.reject(error);
      }

      const errorResponse = error.response;
      const errorResponseData = errorResponse.data;

      const status = errorResponse.status;
      let message = errorResponseData.message ?? errorResponse.statusText ?? 'Something went wrong on our end';

      switch (status) {
        case 404:
          message = message ?? 'Resource not found';
          break;
        case 400:
          message = message ?? 'Invalid Request';
          break;
        default:
          break;
      }

      showErrorNotif({ message });
      return Promise.reject(error);
    },
  );

  return instance;
};
