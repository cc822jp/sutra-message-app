import React from 'react';
import styles from './MessageBody.module.css';

const messages = [
  'ゴールを見失わない強い意志が必要なときもっと自分を信じれば、あなたの願いはきっと叶います。何があっても目標を見失わないこと。いつでも客観的に自分自身を見つめることが、願いを叶える秘訣でしょう。',
  'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  'なるほど'
];

const MessageBody: React.FC = () => {
  return (
    <div>
      {[...Array(10)].map((item, i) => {
        // メッセージをランダムに表示
        const message = messages[Math.floor(Math.random() * messages.length)];

        // 自分の発言と相手の発言を交互に表示
        if (i % 2 === 0) {
          return (
            <div key={i} className={styles.itemMe}>
              <div className={styles.inner}>
                <div className={styles.content}>
                  <div className={styles.balloonMe}>
                    <p>{message}</p>
                  </div>
                  <p className={styles.date}>開封済み 23:05</p>
                </div>
                <figure className={styles.thumb}>
                  <img src="thumb.png" alt="thumb" />
                </figure>
              </div>
            </div>
          );
        } else {
          return (
            <div key={i} className={styles.itemYou}>
              <div className={styles.inner}>
                <div className={styles.content}>
                  <div className={styles.balloonYou}>
                    <p>{message}</p>
                  </div>
                  <p className={styles.date}>開封済み 23:05</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MessageBody;
