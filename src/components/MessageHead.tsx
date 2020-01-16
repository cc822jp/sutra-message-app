import React from 'react';
import styles from './MessageHead.module.css';
import Button, { ButtonTypes as Types } from './Button';

const Message: React.FC = () => {
  return (
    <div className={styles.messageHead}>
      <div>
        <h1 className={styles.title}>まりもちゃん</h1>
        <p className={styles.point}>所持ポイント:99,999,999</p>
      </div>
      <div className={styles.tags}>
        <div className={styles.tag}>
          <Button label="本人の鑑定カルテ" type={Types.Small} />
        </div>
        <div className={styles.tag}>
          <Button label="お相手の鑑定カルテ1" type={Types.Small} />
        </div>
        <div className={styles.tag}>
          <Button label="お相手の鑑定カルテ2" type={Types.Small} />
        </div>
      </div>
    </div>
  );
};

export default Message;
