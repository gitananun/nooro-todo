import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './tasks-list.module.scss';

export const TasksListItem = () => {
  return (
    <div className={styles.card}>
      <div className={styles.leading}>
        <div className={styles.indicator}></div>
        <p className={styles.content}>Task Name</p>
      </div>
      <div className={styles.actions}>
        <FontAwesomeIcon icon={faTrashAlt} width={14} className={styles.icon} />
      </div>
    </div>
  );
};
