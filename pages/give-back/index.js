import React from "react";
import { Hero, Events } from "../../components";
import { createClient } from "contentful";

const GiveBloodPage = ({ events }) => {
  return (
    <>
      <Hero image='volunteer.jpg' />
      <Events program='give-back' events={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "event" });
  let events = res.items.filter(item => item.fields.program === "give-back");
  events = events.map(event => ({
    ...event.fields,
    src: `https:${event.fields.src.fields.file.url}`,
    id: event.sys.id,
  }));
  console.log(events);
  return {
    props: { events },
  };
};
export default GiveBloodPage;
