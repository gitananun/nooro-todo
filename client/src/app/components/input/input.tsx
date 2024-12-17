'use client';
import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './input.module.scss';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
}

export const XInput = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const { error, label, ...rest } = props;
  const className = `${styles.field} ${props.className || ''} ${error ? styles.error : ''}`;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input {...rest} ref={ref} hidden={false} type={'text'} className={className} />

      {error && <small className={styles.errorText}>{error}</small>}
    </div>
  );
});

XInput.displayName = 'XInput';
