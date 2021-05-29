import { Hero, Carousel } from "../components";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <div className='container'></div>
      <Hero paragraphs={[""]} />
      <h2 className={styles.title}>Our Latest Events</h2>

      <Carousel />
      <section className={styles.section}>
        <h2>What we do</h2>
        <p>
          WE are community! We are a faith-based, non-for-profit organisation.
          We believe we are the hands and feet of Christ; this means our
          responsibility is to empower, build up and encourage individuals in
          society, creating a community that reflects God’s glory. We run
          faith-based programs and events and do outreach.
        </p>
      </section>
    </>
  );
}
