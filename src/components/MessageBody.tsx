import React from 'react';
import styles from './MessageBody.module.css';

const MessageBody: React.FC = () => {
  return (
    <div>
      {[...Array(10)].map((item, i) => {
        if (i % 2 === 0) {
          return (
            <div key={i} className={styles.itemMe}>
              <div className={styles.itemMeInner}>
                <div className={styles.itemMeContent}>
                  <div className={styles.balloonMe}>
                    <p>ゴールを見失わない強い意志が必要なときもっと自分を信じれば、あなたの願いはきっと叶います。何があっても目標を見失わないこと。いつでも客観的に自分自身を見つめることが、願いを叶える秘訣でしょう。</p>
                  </div>
                  <p className={styles.date}>開封済み 23:05</p>
                </div>
                <figure className={styles.thumb}>
                  <img src="thumb.png" alt="thumb" />
                </figure>
              </div>
            </div>
          )
        } else {
          return (
            <div key={i} className={styles.itemYou}>
              <div className={styles.itemYouInner}>
                <div className={styles.itemYouContent}>
                  <div className={styles.balloonYou}>
                    <p>ゴールを見失わない強い意志が必要なときもっと自分を信じれば、あなたの願いはきっと叶います。何があっても目標を見失わないこと。いつでも客観的に自分自身を見つめることが、願いを叶える秘訣でしょう。</p>
                  </div>
                  <p className={styles.date}>開封済み 23:05</p>
                </div>
              </div>
            </div>
          )
        }
      })}
    </div>
  );
}

export default MessageBody;
