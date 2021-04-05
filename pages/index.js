import styles from "../styles/Home.module.css";
import { Hero, Cards } from "../components";
import { cards } from "../data.js";
export default function Home() {
  return (
    <>
      <Hero />
      <Cards cards={cards} />
    </>
  );
}
