import React from "react";
import { server } from "../../config";
import { Hero, Events } from "../../components";
import { giveBackEvents } from "../../data";

const GiveBloodPage = ({ events }) => {
  return (
    <>
      <Hero image='volunteer.jpg' />
      <Events program='give-back' events={events} />
    </>
  );
};

export const getStaticProps = async () => {
  //const res = await fetch(`${server}/api/events`);
  //const data = await res.json();

  //const { events } = data;

  return {
    props: { events: giveBackEvents },
  };
};
export default GiveBloodPage;
