import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Hero } from "../components";
import { cards } from "../data.js";
export default function Home() {
  return (
    <>
      <Hero />
      <main className={styles.main}>
        {cards.map((card, index) => {
          const { src, text } = card;
          return (
            <article
              key={index}
              className={`${styles.card} ${
                index % 2 === 1 && styles.cardReversed
              }`}
            >
              <div className={styles.cardImage}>
                <Image src={src} width='150' height='100' layout='responsive' />
              </div>

              <p className={styles.cardPara}>{text}</p>
            </article>
          );
        })}
      </main>
    </>
  );
}
