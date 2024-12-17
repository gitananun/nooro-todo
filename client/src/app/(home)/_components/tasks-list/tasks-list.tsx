import { XBadge } from '@/app/components';
import { useAppSelector } from '@/lib/hooks';
import { TasksListItem } from './tasks-list-item';
import styles from './tasks-list.module.scss';

export const TasksList = () => {
  const { items } = useAppSelector((state) => state.tasks);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.leading}>
          Tasks <XBadge text={items.length.toString()} />
        </p>
        <p className={styles.trailing}>
          Completed <XBadge text={`${items.filter((i) => i.completed).length} de ${items.length}`} />
        </p>
      </div>
      <div className={styles.list}>
        {items.map((item) => (
          <TasksListItem key={item.id} task={item} />
        ))}
      </div>
    </div>
  );
};
