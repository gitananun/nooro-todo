import { XBadge } from '@/app/components';
import { useAppSelector } from '@/lib/hooks';
import { useMemo } from 'react';
import { EmptyList } from '..';
import { TasksListItem } from './tasks-list-item';
import styles from './tasks-list.module.scss';

export const TasksList = () => {
  const { items } = useAppSelector((state) => state.tasks);

  const completed = useMemo(() => items.filter((i) => i.completed), [items]);
  const sorted = useMemo(() => items.slice().sort((a) => (a.completed ? 1 : -1)), [items]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.leading}>
          Tasks <XBadge text={items.length.toString()} />
        </p>
        <p className={styles.trailing}>
          Completed <XBadge text={`${completed.length} de ${items.length}`} />
        </p>
      </div>
      {items.length === 0 ? (
        <EmptyList />
      ) : (
        <div className={styles.list}>
          {sorted.map((i) => (
            <TasksListItem key={i.id} task={i} />
          ))}
        </div>
      )}
    </div>
  );
};
