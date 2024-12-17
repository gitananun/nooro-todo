import { ITask, taskAdapter } from '@/interfaces';
import { axiosInstance, IResponseData, validateServiceResponseData } from '.';

const BASE_URL = 'task';

export const tasksService = {
  index: async (): Promise<ITask[]> => {
    const response = await axiosInstance().get<IResponseData<ITask[]>>(BASE_URL);
    const data = validateServiceResponseData(response);

    return data?.map((item) => taskAdapter(item));
  },
  create: async (data: Partial<ITask>): Promise<ITask> => {
    const response = await axiosInstance().post<IResponseData<ITask>>(BASE_URL, data);
    const item = validateServiceResponseData(response);

    return taskAdapter(item);
  },
  update: async (id: number, data: Partial<ITask>): Promise<ITask> => {
    const response = await axiosInstance().put<IResponseData<ITask>>(`${BASE_URL}/${id}`, data);
    const item = validateServiceResponseData(response);

    return taskAdapter(item);
  },
  destroy: async (id: number): Promise<void> => {
    await axiosInstance().delete(`${BASE_URL}/${id}`);
  },
};
