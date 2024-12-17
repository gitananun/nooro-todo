import { XTextButton } from '@/app/components';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './new-task-row.module.scss';

export const NewTaskRow = () => {
  return (
    <div className={styles.create}>
      <XTextButton className={styles.button} icon={faPlusCircle}>
        Create Task
      </XTextButton>
    </div>
  );
};
