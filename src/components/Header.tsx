import React from 'react';
import { FaBell } from 'react-icons/fa';
import styles from './Header.module.css';

const Button: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.notification}>
        <FaBell />
      </div>
    </header>
  );
};

export default Button;
