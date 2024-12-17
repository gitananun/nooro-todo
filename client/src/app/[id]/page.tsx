'use client';

import { ITask } from '@/interfaces';
import { tasksService } from '@/lib/services';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Form } from './_components';
import styles from './page.module.scss';

const ShowPage = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const [task, setTask] = useState<ITask | null>(null);

  useEffect(() => {
    const parsedId = Number(params.id);
    if (isNaN(parsedId)) return router.push('/');

    tasksService.show(Number(params.id)).then((data) => setTask(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} />
      </Link>
      {task && <Form task={task} />}
    </div>
  );
};

export default ShowPage;
