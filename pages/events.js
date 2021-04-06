import React from "react";
import { server } from "../config";
import { Hero, Events } from "../components";

const EventsPage = ({ events }) => {
  return (
    <>
      <Hero image='volunteer.jpg' />
      <Events program='events' events={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/events`);
  const data = await res.json();

  const { events } = data;

  return {
    props: { events },
  };
};
export default EventsPage;
