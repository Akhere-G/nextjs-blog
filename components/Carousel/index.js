import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Carousel.module.css";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const cards = [
  {
    image: "/family.jpg",
    text: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
    exercitationem distinctio vel unde quisquam quaerat expedita facilis
    voluptate mollitia, architecto quae ullam perferendis blanditiis rerum
    maxime reprehenderit fuga atque dolor ratione ducimus cupiditate, hic
    est commodi. Qui consequuntur autem dignissimos!
    `,
  },
  {
    image: "/hugging.jpg",
    text: `
    Quos ea voluptates sapiente illum commodi obcaecati reprehenderit est ratione, 
    excepturi ipsa quae dolorum soluta incidunt cumque tenetur, accusamus quis libero tempore provident. 
    Corrupti eveniet enim velit dolorum fugiat voluptate autem et.
    `,
  },
  {
    image: "/hands.jpg",
    text: `
    Ut sapiente consequuntur consectetur repudiandae, et praesentium dolor temporibus,
    odio possimus tempore, numquam beatae eum! At reiciendis a fuga earum quae molestias?
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, at!
    `,
  },
];

const Carousel = () => {
  const [place, setPlace] = useState(0);
  return (
    <div className={styles.carousel}>
      <button
        className={styles.leftArrow}
        onClick={() =>
          setPlace(prev => (prev + cards.length - 1) % cards.length)
        }
      >
        <ChevronLeft />
      </button>

      {cards.map((card, index) => {
        const { image, text } = card;

        let cardStyle;

        if (index === place) {
          cardStyle = styles.placeMain;
        } else if (index < place) {
          cardStyle = styles.placePrev;
        } else if (index > place) {
          cardStyle = styles.placePost;
        }

        return (
          <section key={index} className={`${cardStyle} ${styles.card}`}>
            <Image src={image} width={300} height={200} fill='responsive' />
            <p>{text}</p>
          </section>
        );
      })}
      <button
        className={styles.rightArrow}
        onClick={() => setPlace(prev => (prev + 1) % cards.length)}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
