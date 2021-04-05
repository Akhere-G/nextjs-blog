import { events } from "../../../data.js";
export default (req, res) => {
  const {
    query: { slug },
  } = req;
  const event = events.find(event => event.slug === slug);
  if (event) {
    res.status(200).json({ event });
  } else {
    res.status(404).json({ message: "No Event with that id" });
  }
};
