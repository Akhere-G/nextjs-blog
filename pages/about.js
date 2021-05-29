import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";
import { Cards } from "../components";

const cards = [
  {
    id: 1,
    src: "/groupMeeting.jpg",
    text: `WE are community! We are a faith-based, non-for-profit organisation. We believe we are
    the hands and feet of Christ; this means our responsibility is to empower, build up and
    encourage individuals in society, creating a community that reflects God’s glory.
    We run faith-based programs and events and do outreach.`,
  },
  {
    id: 2,
    src: "/feet.jpg",
    text: `This year, we are collaborating with Sickle Cell Society U.K. and Give blood
    Spread Love to raise awareness on sickle cell and the urgent need for more
    black and mixed raced blood donors
    We are targeting to register 1000 first time blood donors within the black
    community.`,
  },
  {
    id: 3,
    src: "/hands.jpg",
    text: `We are called to give and that’s what we enjoy doing the most! Giving for us is not a burden
    or a choice, it’s our calling and part of what identifies us as followers of Christ. We are
    excited to partner with and support a range of organisation through a range of different
    programs.`,
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
    <div className='container'>
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
