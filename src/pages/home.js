import React from 'react';
import Image from 'next/image';
import styles from '/src/styles/Home.module.css';

export default function Home() {
  const UnoptimizedImage = (props) => {
  return <Image {...props} unoptimized />;
  };
  
  return (
    <div>
      <h1 className={styles.nameHeader}>Stella Sinlao</h1>
      <hr />
      <Image
              className={styles.cat}
              src="/images/bongo-cat.gif"
              alt="bongo cat"
              width={450}
              height={450}
      />
      <div className={styles.homeInfo}>
        <h2>Computer Science, Data Science, Full Stack Development, Social Computing</h2>
      </div>
    </div>
  );
}
