import { XBadge } from '@/app/components';
import { TasksListItem } from './tasks-list-item';
import styles from './tasks-list.module.scss';

export const TasksList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.leading}>
          Tasks <XBadge text="5" />
        </p>
        <p className={styles.trailing}>
          Completed <XBadge text="2 de 5" />
        </p>
      </div>
      <div className={styles.list}>
        <TasksListItem />
      </div>
    </div>
  );
};
