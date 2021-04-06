import React from "react";

import { worshipEvents } from "../../data";
import { EventTemplate } from "../../components";

const WorshipEvent = ({ title, location, time, src, text, link }) => {
  return (
    <EventTemplate
      program='worship'
      {...{ title, location, time, src, text, link }}
    />
  );
};

export const getStaticPaths = async () => {
  //const res = await fetch(`${server}/api/events`);
  //const data = await res.json();

  //const { events } = data;

  const slugs = worshipEvents.map(event => event.slug);

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

  const event = worshipEvents.find(event => event.slug === slug);
  return { props: { ...event } };
};
export default WorshipEvent;
