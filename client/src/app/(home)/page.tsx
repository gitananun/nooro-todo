'use client';
import { useAppDispatch } from '@/lib/hooks';
import { dispatchTasksIndexAction } from '@/lib/store';
import { useEffect } from 'react';
import { NewTaskRow, TasksList } from './_components';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatchTasksIndexAction(dispatch).catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NewTaskRow />
      <TasksList />
    </>
  );
};

export default Home;
