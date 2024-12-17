import { NewTaskRow, TasksList } from './_components';
import styles from './page.module.scss';

const Home = () => {
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
