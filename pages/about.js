import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";
import { Cards } from "../components";

const cards = [
  {
    id: 1,
    src: "/groupMeeting.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias minus officia libero itaque reiciendis, eius consequatur, impedit repudiandae labore totam quos nobis dolores illo unde delectus veritatis iusto dolorum molestiae.",
  },
  {
    id: 2,
    src: "/feet.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quae et voluptatem eaque facilis natus voluptate recusandae ipsum saepe similique, odio nemo tempore perferendis minus labore. Praesentium excepturi deleniti incidunt id ducimus autem sed repellendus, qui amet numquam esse odio sunt eius necessitatibus laborum ea officiis, culpa facilis nisi vitae.",
  },
  {
    id: 3,
    src: "/hands.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, molestiae id nulla sed corrupti ullam, consequatur vitae maxime alias tempore, veritatis doloribus quibusdam voluptatum. Odit, totam voluptatum! Debitis illo, nisi consequatur dolor sunt sapiente quam deleniti odit laborum ex alias!",
  },
];

const Images = [
  "/mantra 1.png",
  "/mantra 2.png",
  "/mantra 3.png",
  "/mantra 4.png",
  "/mantra 5.png",
  "/mantra 6.png",
];

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h2>About Community</h2>
        <Cards cards={cards} />

        <article className={styles.info}>
          <h2>Mantras</h2>
          <section className={styles.mantras}>
            {Images.map((image, index) => {
              return (
                <div
                  className={
                    index % 2 === 0 ? styles.mantraRight : styles.mantra
                  }
                  key={index}
                >
                  <Image
                    src={image}
                    width={789}
                    height={443}
                    layout='responsive'
                  ></Image>
                </div>
              );
            })}
          </section>
        </article>
      </div>
    </div>
  );
};

export default About;
