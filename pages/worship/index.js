import React from "react";
import { server } from "../../config";
import { Hero, Events } from "../../components";
import { worshipEvents } from "../../data";

const WorshipPage = ({ events }) => {
  return (
    <>
      <Hero image='volunteer.jpg' />
      <Events program='worship' events={events} />
    </>
  );
};

export const getStaticProps = async () => {
  //const res = await fetch(`${server}/api/events`);
  //const data = await res.json();

  //const { events } = data;

  return {
    props: { events: worshipEvents },
  };
};
export default WorshipPage;
