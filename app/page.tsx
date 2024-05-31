import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles['container-hero']}>
        <Image
          className={styles['hero']}
          src="/images/colo.jpeg"
          alt="Picture of the author"
          fill
        />
      </div>
    </main>
  );
}
