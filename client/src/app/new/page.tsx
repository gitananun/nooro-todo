import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Form } from './_components';
import styles from './page.module.scss';

const NewPage = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} />
      </Link>
      <Form />
    </div>
  );
};

export default NewPage;
