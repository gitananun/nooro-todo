import { XTextButton } from '@/app/components';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      {/* CREATE ROW */}
      <div className={styles.create}>
        <XTextButton className={styles.button} icon={faPlusCircle}>
          Create Task
        </XTextButton>
      </div>
    </main>
  );
};

export default Home;
