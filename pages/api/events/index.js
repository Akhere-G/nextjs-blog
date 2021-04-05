import { events } from "../../../data.js";
export default (req, res) => {
  res.status(200).json({ events });
};
