import React from "react";
import styles from "../../../styles/Event.module.css";
import Image from "next/image";
import { Schedule, PinDrop } from "@material-ui/icons";
const Event = ({ title, location, time, src }) => {
  return (
    <article key={title} className={styles.event}>
      <div className={styles.image}>
        <Image src={src} width='150' height='100' layout='responsive' />
      </div>
      <div className={styles.details}>
        <h4>{title}</h4>
        <span className={styles.detail}>
          <PinDrop />
          <p>{location}</p>
        </span>
        <span className={styles.detail}>
          <Schedule />
          <p>{`${time.toLocaleDateString()}`}</p>
        </span>
      </div>
    </article>
  );
};

export default Event;
