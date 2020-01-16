import React from 'react';
import styles from './Button.module.css';

export enum ButtonTypes {
  Small = 'button--small',
  Normal = 'button--normal'
}

interface IButtonProps {
  label: string;
  type: ButtonTypes;
}

const Button: React.FC<IButtonProps> = ({ label, type }) => {
  return <div className={`${styles.button} ${styles[type]}`}>{label}</div>;
};

export default Button;
