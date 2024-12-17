import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { HTMLProps } from 'react';
import { LoadingIndicator } from '../loading-indicator';
import styles from './text-button.module.scss';

interface IProps extends HTMLProps<HTMLButtonElement> {
  icon?: FontAwesomeIconProps['icon'];
  formSubmit?: boolean;
  isLoading?: boolean;
}

export const XTextButton = (props: IProps) => {
  const { children, formSubmit, icon, disabled, isLoading } = props;

  const className = `${styles.button} ${disabled || isLoading ? styles.disabled : ''} ${props.className || ''}`;

  return (
    <button onClick={props.onClick} type={formSubmit ? 'submit' : 'button'} className={className} disabled={disabled}>
      <span>{children}</span>
      {icon && !isLoading && <FontAwesomeIcon icon={icon} width={16} />}
      {isLoading && <LoadingIndicator />}
    </button>
  );
};
