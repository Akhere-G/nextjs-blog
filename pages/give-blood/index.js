import React from "react";
import { server } from "../../config";
import { Hero, Events } from "../../components";
import { giveBloodEvents } from "../../data";

const GiveBloodPage = ({ events }) => {
  return (
    <>
      <Hero image='volunteer.jpg' />
      <Events program='give-blood' events={events} />
    </>
  );
};

export const getStaticProps = async () => {
  //const res = await fetch(`${server}/api/events`);
  //const data = await res.json();

  //const { events } = data;

  return {
    props: { events: giveBloodEvents },
  };
};
export default GiveBloodPage;
