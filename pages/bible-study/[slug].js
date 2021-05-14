import React from "react";

import { EventTemplate } from "../../components";
import { createClient } from "contentful";

const BibleStudyEvent = props => {
  return <EventTemplate program='bible-study' {...props} />;
};

export const getStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "event" });
  const events = res.items.filter(
    item => item.fields.program === "bible-study"
  );
  const slugs = events.map(event => event.fields.slug);
  const paths = slugs.map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const slug = context.params.slug;

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

  const event = events.find(event => event.slug === slug);
  return { props: { ...event } };
};
export default BibleStudyEvent;
