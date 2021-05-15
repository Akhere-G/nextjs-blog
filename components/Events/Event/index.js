import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/Event.module.css";
import { Schedule, PinDrop, Today } from "@material-ui/icons";

const Event = ({ title, slug, location, date, src, brief, program }) => {
  return (
    <article key={title} className={styles.event}>
      <div className={styles.image}>
        <Image src={src} width={300} height={200} layout='responsive' />
      </div>
      <div className={styles.details}>
        <h4>{title}</h4>
        <span className={styles.detail}>
          <PinDrop />
          <p>{location}</p>
        </span>
        <span className={styles.detail}>
          <Today />
          <p>{date}</p>
        </span>
        <p>{brief}</p>
        <Link href={`/${program}/[slug]`} as={`/${program}/${slug}`}>
          <a className='link'>Futher Details</a>
        </Link>
      </div>
    </article>
  );
};

export default Event;
