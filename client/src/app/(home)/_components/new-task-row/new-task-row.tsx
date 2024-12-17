import { XTextButton } from '@/app/components';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './new-task-row.module.scss';

export const NewTaskRow = () => {
  return (
    <div className={styles.create}>
      <Link href="/new" className="w-full">
        <XTextButton className={styles.button} icon={faPlusCircle}>
          Create Task
        </XTextButton>
      </Link>
    </div>
  );
};
