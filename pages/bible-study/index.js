import React from "react";
import { Hero, Events } from "../../components";

import { createClient } from "contentful";

const paragraphs = [
  `Amongst other seasonal programs which dive into God’s word, we run a weekly Bible Study. Sessions are twice a week on Thursdays and Sundays at 8pm BST. Our sessions our safe places, where people can learn about God, ask questions, discuss their feelings and thoughts and meet other people of faith.`,
  `We also have an international, WhatsApp group chat. We have people from all backgrounds and denominations as part of the chat. The group chat is used to pass on words of encouragement, elaborate on the bible study, share music, support one another and so much more.
  `,
];

const BibleStudyPage = ({ events }) => {
  return (
    <>
      <Hero image='volunteer.jpg' title='Bible Study' paragraphs={paragraphs} />
      <Events program='bible-study' events={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "event" });
  let events = res.items.filter(item => item.fields.program === "bible-study");
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
export default BibleStudyPage;
