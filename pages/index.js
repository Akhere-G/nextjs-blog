import { Hero, Carousel } from "../components";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Hero paragraphs={[""]} />
      <h2 className={styles.title}>Our Latest Events</h2>

      <Carousel />
      <section className={styles.section}>
        <h2>What we do</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim error
          aspernatur quis? Tempore possimus quibusdam architecto quam ipsam,
          voluptate quo itaque necessitatibus mollitia excepturi neque at, dolor
          iure libero a labore molestias ullam qui doloremque soluta non
          veritatis, magnam distinctio!
        </p>
      </section>
    </>
  );
}
