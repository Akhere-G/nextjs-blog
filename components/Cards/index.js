import React from "react";
import styles from "../../styles/Card.module.css";
import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <ul className={styles.cards}>
      {cards.map((card, index) => (
        <Card key={card.id} index={index} {...card} />
      ))}
    </ul>
  );
};

export default Cards;
