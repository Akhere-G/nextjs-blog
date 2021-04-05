import React from "react";
import styles from "../../../styles/Card.module.css";
import Image from "next/image";

const Card = ({ src, text, index }) => {
  return (
    <article
      key={index}
      className={`${styles.card} ${false && styles.cardReversed}`}
    >
      <div className={styles.cardImage}>
        <Image src={src} width='150' height='100' layout='responsive' />
      </div>

      <p className={styles.cardPara}>{text}</p>
    </article>
  );
};

export default Card;
