import React from "react";
import { Hero, Events } from "../../components";
import { createClient } from "contentful";

const paragraphs = [
  `Worship is at the heart of everything we do. We create authentic worships spaces for people of all backgrounds and denominations to worship God in intimacy and truth.`,
  `Made A Way- A worship Experience
An evening of worship and intimacy with the Father as we celebrate His perfect grace.`,
  `We are excited to partner with The Gift U.K. to present a worship experience for the masses. We are grateful to international artist, Emmanuel Smith and Becca Folkes for leading our worship night. 
`,
];

const WorshipPage = ({ events }) => {
  return (
    <>
      <Hero image='volunteer.jpg' title='Worship' paragraphs={paragraphs} />
      <Events program='worship' events={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "event" });
  let events = res.items.filter(item => item.fields.program === "worship");
  events = events.map(event => ({
    ...event.fields,
    src: `https:${event.fields.src.fields.file.url}`,
    id: event.sys.id,
  }));
  return {
    props: { events },
    revalidate: 10,
  };
};
export default WorshipPage;
