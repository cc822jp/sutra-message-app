import React from 'react';
import styles from './Message.module.css';
import MessageList from './MessageList';
import MessageHead from './MessageHead';
import MessageBody from './MessageBody';
import MessagePanel from './MessagePanel';
import Button, { ButtonTypes as Types } from './Button';

const Message: React.FC = () => {
  return (
    <div className={styles.message}>
      <div className={styles.menu}>
        <div className={styles.menuBody}>
          <MessageList />
        </div>
        <div className={styles.menuTail}>
          <Button label="もっとみる" type={Types.Normal} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.contentHead}>
            <MessageHead />
          </div>
          <div className={styles.contentBody}>
            <MessageBody />
          </div>
          <div className={styles.contentTail}>
            <MessagePanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
