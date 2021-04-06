import Image from "next/image";
import Link from "next/Link";
import { Schedule, PinDrop, Book } from "@material-ui/icons";
import styles from "../../styles/SingleEvent.module.css";

const EventTemplate = ({ title, location, time, src, text, link }) => {
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
        <span className={styles.detail}>
          <Book />
          <p>
            Book{" "}
            <a
              className='link'
              href={link}
              rel='noreferrer noopener'
              target='_blank'
            >
              here
            </a>
          </p>
        </span>
        <Link href='/give-blood/'>
          <a className='link'>Other events</a>
        </Link>
      </div>
    </article>
  );
};

export default EventTemplate;
