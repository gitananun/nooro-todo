import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './empty-list.module.scss';

export const EmptyList = () => {
  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon icon={faFileAlt} className={styles.icon} />
      <p className={styles.title}>You don{"'"}t have any tasks registered yet.</p>
      <p className={styles.subtitle}>Create tasks and organize your to-do items.</p>
    </div>
  );
};
