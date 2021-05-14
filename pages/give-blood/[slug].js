import React from "react";

import { EventTemplate } from "../../components";
import { createClient } from "contentful";

const GiveBloodEvent = ({ title, location, time, src, text, link }) => {
  return (
    <EventTemplate
      program='give-blood'
      {...{ title, location, time, src, text, link }}
    />
  );
};
export const getStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "event" });
  const events = res.items.filter(item => item.fields.program === "give-blood");
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
  let events = res.items.filter(item => item.fields.program === "give-blood");
  events = events.map(event => ({
    ...event.fields,
    src: `https:${event.fields.src.fields.file.url}`,
    id: event.sys.id,
  }));

  const event = events.find(event => event.slug === slug);
  return { props: { ...event }, revalidate: 10 };
};
export default GiveBloodEvent;
