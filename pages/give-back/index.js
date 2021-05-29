import React from "react";
import { Hero, Events } from "../../components";
import { createClient } from "contentful";

const paragraphs = [
  `We are called to give and that’s what we enjoy doing the most! Giving for us is not a burden
  or a choice, it’s our calling and part of what identifies us as followers of Christ. We are
  excited to partner with and support a range of organisation through a range of different
  programs.`,
  `Book Drive- We are donating hundreds of titles written by young, black authors to schools in
  the U.K. and West Africa. This is to boost representative literature in schools and to improve
  reading ages in schools amongst black students.`,
  `Funding Support- We make donations to a range of small businesses that require support
  and share a similar ethos. Prayer is powerful, but we also know faith with no action is dead
  works.`,
];

const GiveBloodPage = ({ events }) => {
  return (
    <>
      <Hero image='volunteer.jpg' title='Give Back' paragraphs={paragraphs} />
      <p className='section quote'>
        James 2:14-16 ‘What good is it, dear brothers and sisters, if you say
        you have faith but don’t show it by your actions? Can that kind of faith
        save anyone? 15 Suppose you see a brother or sister who has no food or
        clothing, 16 and you say, “Good-bye and have a good day; stay warm and
        eat well”—but then you don’t give that person any food or clothing. What
        good does that do?
      </p>
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
  return {
    props: { events },
    revalidate: 10,
  };
};
export default GiveBloodPage;
