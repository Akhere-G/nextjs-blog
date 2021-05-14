import Image from "next/image";
import Link from "next/link";
import { Schedule, PinDrop, Book, Today } from "@material-ui/icons";
import styles from "../../styles/SingleEvent.module.css";

const EventTemplate = ({
  title,
  location,
  date,
  time,
  src,
  text,
  link,
  program,
}) => {
  return (
    <article key={title} className={styles.event}>
      <section className={styles.header}>
        <div className={styles.image}>
          <Image src={src} width='150' height='100' layout='responsive' />
        </div>
        <div className={styles.details}>
          <h2>{title}</h2>
          <span className={styles.detail}>
            <PinDrop />
            <p>{location}</p>
          </span>
          <span className={styles.detail}>
            <Today />
            <p>{date}</p>
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
          <Link href={`/${program}`}>
            <a className='link'>Other events</a>
          </Link>
        </div>
      </section>
      <p className={styles.text}>{text}</p>
    </article>
  );
};

export default EventTemplate;
