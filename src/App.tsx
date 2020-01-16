import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Message from './components/Message';
const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <Header/>
      </header>
      <main className={styles.body}>
        <div className={styles.menu}>
          <Menu/>
        </div>
        <div className={styles.content}>
          <Message/>
        </div>
      </main>
    </div>
  );
}

export default App;
