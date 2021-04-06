import React from "react";
import Image from "next/image";
import Link from "next/Link";
import { server } from "../../config";
import { giveBloodEvents } from "../../data";
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
          <p>{time}</p>
        </span>
        <Link href='/give-blood/'>
          <a className='link'>Other events</a>
        </Link>
      </div>
    </article>
  );
};

export const getStaticPaths = async () => {
  //const res = await fetch(`${server}/api/events`);
  //const data = await res.json();

  //const { events } = data;

  const slugs = giveBloodEvents.map(event => event.slug);

  const paths = slugs.map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const slug = context.params.slug;

  //const res = await fetch(`${server}/api/events/${slug}`);
  //const { event } = await res.json();

  const event = giveBloodEvents.find(event => event.slug === slug);
  console.log("event hererere: ", event);
  return { props: { ...event } };
};
export default EventPage;
