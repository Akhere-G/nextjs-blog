import React from "react";
import { Hero, Events } from "../../components";

import { createClient } from "contentful";

const BibleStudyPage = ({ events }) => {
  console.log(events);
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

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "event" });
  let events = res.items.filter(item => item.fields.program == "bible-study");
  events = events.map(event => ({
    ...event.fields,
    src: `https:${event.fields.src.fields.file.url}`,
    srcSize: {
      width: event.fields.src.fields.file.details.image.width,
      height: event.fields.src.fields.file.details.image.height,
    },
    id: event.sys.id,
  }));
  console.log(events);
  return {
    props: { events },
  };
};
export default BibleStudyPage;
