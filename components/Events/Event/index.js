import React from "react";
import styles from "../../../styles/Event.module.css";
import Image from "next/image";

const Event = ({ src, text, index }) => {
  return (
    <article
      key={index}
      className={`${styles.event} ${false && styles.eventReversed}`}
    >
      <div className={styles.eventImage}>
        <Image src={src} width='150' height='100' layout='responsive' />
      </div>

      <p className={styles.eventPara}>{text}</p>
    </article>
  );
};

export default Event;
