import { ITask, taskAdapter } from '@/interfaces';
import { axiosInstance, IResponseData, validateServiceResponseData } from '.';

const BASE_URL = 'task';

export const tasksService = {
  index: async (): Promise<ITask[]> => {
    const response = await axiosInstance().get<IResponseData<ITask[]>>(BASE_URL);
    const data = validateServiceResponseData(response);

    return data?.map((item) => taskAdapter(item));
  },
};
