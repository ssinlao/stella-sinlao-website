import styles from '/src/styles/About.module.css';
import Image from 'next/image';
import TechStack from '/src/components/TechStack';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About Me</h1>
      <hr />
      <div className={styles.topContainer}>
        <Image
        src="/linkedin.jpg"
        alt="Your profile"
        className={styles.profileImage}
        width={120}
        height={120}
      />
        <ul className={styles.infoList}>
          <li>☀️ Based in Southern California</li>
          <li>📚 Education: Cal Poly Pomona, 4th year</li>
          <li>🎓 Degree: Currently pursuing a B.S. in Computer Science</li>
          <li>🔎 Interests: UI/UX, Full Stack Development, Graphic Design, Data Analysis, Data Processing, Machine Learning, Game Development </li>
        </ul>
      </div>
      <TechStack />
    </div>
  );
}
