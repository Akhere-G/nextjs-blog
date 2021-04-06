import React from "react";

import { giveBackEvents } from "../../data";
import { EventTemplate } from "../../components";

const GiveBackEvent = ({ title, location, time, src, text, link }) => {
  return (
    <EventTemplate
      program='give-back'
      {...{ title, location, time, src, text, link }}
    />
  );
};

export const getStaticPaths = async () => {
  //const res = await fetch(`${server}/api/events`);
  //const data = await res.json();

  //const { events } = data;

  const slugs = giveBackEvents.map(event => event.slug);

  const paths = slugs.map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const slug = context.params.slug;

  //const res = await fetch(`${server}/api/events/${slug}`);
  //const { event } = await res.json();

  const event = giveBackEvents.find(event => event.slug === slug);
  return { props: { ...event } };
};
export default GiveBackEvent;
