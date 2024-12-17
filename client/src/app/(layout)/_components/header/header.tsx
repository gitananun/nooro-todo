import { XRocket } from '@/app/components';
import styles from './header.module.scss';

export const LayoutHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <XRocket />
        <h1>
          <span className={styles.span1}>Todo</span> <span className={styles.span2}>App</span>
        </h1>
      </div>
    </div>
  );
};
