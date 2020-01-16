import React from 'react';
import styles from './MessageList.module.css';

const MessageList: React.FC = props => {
  return (
    <div className={styles.messageList}>
      {[...Array(10)].map((item, i) => {
        const className =
          i === 0 ? `${styles.item} ${styles.active}` : styles.item;
        return (
          <div key={i} className={className}>
            <div className={styles.itemHead}>
              <h2 className={styles.itemTitle}>まりもちゃん</h2>
              <div className={styles.itemDate}>1時間前</div>
            </div>
            <div className={styles.itemBody}>
              こんなことで悩んで困ってますのでこんなことで悩んで困ってますのでこんなことで悩んで困ってますので
            </div>

            {(() => {
              if (i === 1 || i === 2) {
                return <div className={styles.notification}></div>;
              }
            })()}
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
