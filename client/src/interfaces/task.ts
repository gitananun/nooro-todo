import moment from 'moment';

export interface ITask {
  id: number;
  title: string;
  color?: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const taskAdapter = (data: any): ITask => {
  if (!data) throw new Error('No data provided to taskAdapter');

  const { id, title, color, completed, createdAt, updatedAt } = data;

  if (!id || !title || !createdAt || !updatedAt) throw new Error('taskAdapter data is incomplete');

  return {
    id,
    title,
    color,
    completed,
    createdAt: moment(new Date(createdAt)).format('LL'),
    updatedAt: moment(new Date(updatedAt)).format('LL'),
  };
};
