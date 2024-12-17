import { XRocket } from '@/app/components';
import Link from 'next/link';
import styles from './header.module.scss';

export const LayoutHeader = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <div className={styles.heading}>
          <XRocket />
          <h1>
            <span className={styles.span1}>Todo</span> <span className={styles.span2}>App</span>
          </h1>
        </div>
      </Link>
    </div>
  );
};
