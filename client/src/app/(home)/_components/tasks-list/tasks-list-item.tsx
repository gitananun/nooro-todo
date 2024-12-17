import { ITask } from '@/interfaces';
import { useAppDispatch } from '@/lib/hooks';
import { dispatchTasksDeleteAction, dispatchTasksUpdateAction } from '@/lib/store';
import { faCheck, faCircleCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './tasks-list.module.scss';

interface IProps {
  task: ITask;
}

export const TasksListItem = (props: IProps) => {
  const { task } = props;
  const dispatch = useAppDispatch();

  const onCheck = () => dispatchTasksUpdateAction(dispatch, task.id, { completed: !task.completed });

  const onDelete = () => dispatchTasksDeleteAction(dispatch, task.id);

  return (
    <div className={`${styles.card} ${task.completed ? styles.completed : ''}`}>
      <div className={styles.leading}>
        <div className={`${styles.indicator} ${!task.color || !task.completed ? styles.defaultColor : task.color}`}>
          {task.completed && <FontAwesomeIcon icon={faCheck} width={8} />}
        </div>
        <p className={styles.content}>{task.title}</p>
      </div>
      <div className={styles.actions}>
        {!task.completed && (
          <FontAwesomeIcon icon={faCircleCheck} width={16} className={styles.check} onClick={onCheck} />
        )}
        <FontAwesomeIcon icon={faTrashAlt} width={16} className={styles.icon} onClick={onDelete} />
      </div>
    </div>
  );
};
