import React from 'react';
import styles from './cloudy.module.css';

const Cloudy = () => {
  return (
    <section className={styles.cloudyWrapper}>
      <div className={styles.cloud}></div>
    </section>
  );
};

export default Cloudy;
