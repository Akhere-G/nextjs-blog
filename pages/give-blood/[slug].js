import React from "react";

import { EventTemplate, Skeleton } from "../../components";
import { createClient } from "contentful";

const GiveBloodEvent = ({ event }) => {
  if (!event) {
    return <Skeleton />;
  }
  return <EventTemplate program='give-blood' {...event} />;
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
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "event",
    "fields.slug": params.slug,
  });

  if (!res.items.length) {
    return {
      redirect: {
        destination: "/give-blood",
        permanent: false,
      },
    };
  }

  const event = res.items[0];

  const eventProps = {
    ...event.fields,
    src: `https:${event.fields.src.fields.file.url}`,
    id: event.sys.id,
  };

  return { props: { event: eventProps }, revalidate: 10 };
};
export default GiveBloodEvent;
