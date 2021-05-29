import React from "react";
import { Hero, Events } from "../../components";

import { createClient } from "contentful";

const paragraphs = [
  `This year, we are collaborating with Sickle Cell Society U.K. and Give blood
Spread Love to raise awareness on sickle cell and the urgent need for more
black and mixed raced blood donors`,
  `We are targeting to register 1000 first time blood donors within the black
community.`,
];
const GiveBloodPage = ({ events }) => {
  return (
    <>
      <Hero image='volunteer.jpg' title='Give Blood' paragraphs={paragraphs} />
      <Events program='give-blood' events={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "event" });
  let events = res.items.filter(item => item.fields.program === "give-blood");
  events = events.map(event => ({
    ...event.fields,
    src: `https:${event.fields.src.fields.file.url}`,
    srcSize: {
      width: event.fields.src.fields.file.details.image.width,
      height: event.fields.src.fields.file.details.image.height,
    },
    id: event.sys.id,
  }));
  return {
    props: { events },
    revalidate: 10,
  };
};

export default GiveBloodPage;
