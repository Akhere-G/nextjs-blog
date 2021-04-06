import React from "react";
import { server } from "../../config";
import { Hero, Events } from "../../components";
import { bibleStudyEvents } from "../../data";

const BibleStudyPage = ({ events }) => {
  return (
    <>
      <Hero image='volunteer.jpg' />
      <Events program='bible-study' events={events} />
    </>
  );
};

export const getStaticProps = async () => {
  //const res = await fetch(`${server}/api/events`);
  //const data = await res.json();

  //const { events } = data;

  return {
    props: { events: bibleStudyEvents },
  };
};
export default BibleStudyPage;
