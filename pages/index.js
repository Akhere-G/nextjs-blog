import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { cards } from "../data.js";
export default function Home() {
  return (
    <>
      <article className={styles.hero}>
        <h2 className={styles.hero_title}>Community</h2>
        <p className={styles.hero_paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          aut deserunt architecto expedita aperiam? Exercitationem veritatis
          suscipit tempora molestiae provident harum aspernatur placeat
          consequuntur praesentium officia necessitatibus corrupti eos debitis
          eveniet, deserunt rem corporis quam quasi, numquam similique! Veniam,
          minus.
        </p>
        <p className={styles.hero_paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          aut deserunt architecto expedita aperiam? Exercitationem veritatis
          suscipit tempora molestiae provident harum aspernatur placeat
          consequuntur praesentium officia necessitatibus corrupti eos debitis
          eveniet, deserunt rem corporis quam quasi, numquam similique! Veniam,
          minus.
        </p>
      </article>
      <main className={styles.main}>
        {cards.map((card, index) => {
          const { src, text } = card;
          return (
            <article
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
