import React from "react";
import styles from "../../styles/Event.module.css";
import Event from "./Event";

const Events = ({ program, events }) => {
  return (
    <ul className={styles.events}>
      {events.map((event, index) => (
        <Event key={event.id} program={program} {...event} />
      ))}
    </ul>
  );
};

export default Events;
