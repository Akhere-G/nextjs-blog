import React from "react";
import { Hero, Events } from "../components";
import { events } from "../data.js";

const EventsPage = () => {
  return (
    <>
      <Hero image='volunteer.jpg' />
      <Events events={events} />
    </>
  );
};

export default EventsPage;
