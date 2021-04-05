import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Event.module.css";
import { Schedule, PinDrop } from "@material-ui/icons";

const Event = ({ title, slug, location, time, src }) => {
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
        <Link href='/events/[slug]' as={`/events/${slug}`}>
          <a className='link'>details</a>
        </Link>
      </div>
    </article>
  );
};

export default Event;
