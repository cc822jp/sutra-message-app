import React from 'react';
import styles from './MessagePanel.module.css';
import { MdInsertPhoto } from 'react-icons/md';
import { IoMdCheckbox } from 'react-icons/io';

const MessagePanel: React.FC = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.head}>
        5文字以上200文字以下で入力してください <span>0文字</span>
      </div>
      <textarea
        className={styles.textarea}
        placeholder="メッセージを入力してください"
      ></textarea>
      <div className={styles.menu}>
        <div className={styles.photo}>
          <MdInsertPhoto />
        </div>
        <div className={styles.free}>
          <div className={styles.freeIcon}>
            <IoMdCheckbox />
          </div>
          <span>無料メッセージ</span>
        </div>
        <div>
          <div className={styles.button}>送信する</div>
        </div>
      </div>
    </div>
  );
};

export default MessagePanel;
