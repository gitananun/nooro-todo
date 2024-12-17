import { ITask } from '@/interfaces';
import { tasksService } from '@/lib/services';
import { Dispatch } from 'redux';
import { add, set } from './reducer';

export const dispatchTasksIndexAction = async (dispatch: Dispatch): Promise<ITask[]> => {
  try {
    const payload = await tasksService.index();
    if (!payload) throw new Error('Failed to fetch tasks');

    dispatch(set(payload));
    return payload;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error;
  }
};

export const dispatchTasksCreateAction = async (dispatch: Dispatch, data: Partial<ITask>): Promise<ITask> => {
  try {
    const payload = await tasksService.create(data);
    if (!payload) throw new Error('Failed to create task');

    dispatch(add(payload));
    return payload;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error;
  }
};