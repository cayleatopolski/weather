import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Cloudy from './components/graphics/Cloudy.js';
import Sunny from './components/graphics/Sunny.js';

export default function Home() {
  return (
    <div>
      <Cloudy />
      <Sunny />
    </div>
  );
}
