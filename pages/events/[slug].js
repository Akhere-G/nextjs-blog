import React from "react";
import Image from "next/image";
import Link from "next/Link";
import { server } from "../../config";

import { Schedule, PinDrop } from "@material-ui/icons";
import styles from "../../styles/SingleEvent.module.css";

const EventPage = ({ title, location, time, src, text }) => {
  return (
    <article key={title} className={styles.event}>
      <div className={styles.image}>
        <Image src={src} width='150' height='100' layout='responsive' />
      </div>
      <div className={styles.details}>
        <h2>{title}</h2>
        <p className={styles.text}>{text}</p>
        <span className={styles.detail}>
          <PinDrop />
          <p>{location}</p>
        </span>
        <span className={styles.detail}>
          <Schedule />
          <p>{`${new Date(time).getTime()}`}</p>
        </span>
        <Link href='/events/'>
          <a className='link'>Other events</a>
        </Link>
      </div>
    </article>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/events`);
  const data = await res.json();

  console.log(data);

  const { events } = data;

  const slugs = events.map(event => event.slug);

  const paths = slugs.map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const slug = context.params.slug;

  const res = await fetch(`${server}/api/events/${slug}`);
  const { event } = await res.json();
  return { props: { ...event } };
};
export default EventPage;
