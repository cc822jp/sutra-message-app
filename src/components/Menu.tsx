import React from 'react';
import styles from './Menu.module.css';
import { IoIosArrowDown } from 'react-icons/io';

const Menu: React.FC = props => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuHead}>
        オンライン
        <div className={styles.menuIcon}>
          <IoIosArrowDown></IoIosArrowDown>
        </div>
      </div>
      <div className={styles.menuBody}>
        <div className={styles.item}>ホーム</div>
        <div className={styles.item}>チャット</div>
        <div className={styles.item}>パスワード変更</div>
        <div className={styles.item}>使い方ガイド</div>
      </div>
    </div>
  );
};

export default Menu;
