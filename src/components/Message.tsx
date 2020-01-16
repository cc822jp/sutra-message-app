import React from 'react';
import styles from './Message.module.css';
import MessageList from "./MessageList";
import MessageBody from "./MessageBody";
import Button, {ButtonTypes as Types} from "./Button";

const Message: React.FC = () => {
  return (
    <div className={styles.message}>
      <div className={styles.menu}>
        <div className={styles.menuBody}>
          <MessageList/>
        </div>
        <div className={styles.menuTail}>
          <Button label="もっとみる" type={Types.Normal}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.contentHead}>
            <div>
              <h1 className={styles.title}>まりもちゃん</h1>
              <p className={styles.summary}>所持ポイント:99,999,999</p>
            </div>
            <div className={styles.tags}>
              <div className={styles.tag}>
                <Button label="本人の鑑定カルテ" type={Types.Small}/>
              </div>
              <div className={styles.tag}>
                <Button label="お相手の鑑定カルテ1" type={Types.Small}/>
              </div>
              <div className={styles.tag}>
                <Button label="お相手の鑑定カルテ2" type={Types.Small}/>
              </div>
            </div>
          </div>
          <div className={styles.contentBody}>
            <MessageBody/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
