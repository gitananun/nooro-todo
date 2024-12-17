'use client';

import { useAppDispatch } from '@/lib/hooks';
import { dispatchTasksIndexAction } from '@/lib/store';
import { useEffect } from 'react';
import { NewTaskRow, TasksList } from './_components';
import styles from './page.module.scss';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatchTasksIndexAction(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <NewTaskRow />

        <TasksList />
      </div>
    </main>
  );
};

export default Home;
