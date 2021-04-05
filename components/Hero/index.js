import React, { useRef, useEffect } from "react";
import styles from "../../styles/Hero.module.css";

const Hero = ({ image = "/hero.jpg" }) => {
  const heroRef = useRef();

  useEffect(() => {
    console.log(heroRef.current.style);
    heroRef.current.style = `background-image: linear-gradient(#0004, #0008), url("${image}")`;
    console.log(heroRef.current.style);
  }, []);

  return (
    <article className={styles.hero} ref={heroRef}>
      <h2 className={styles.title}>Community</h2>
      <p className={styles.paragraph}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aut
        deserunt architecto expedita aperiam? Exercitationem veritatis suscipit
        tempora molestiae provident harum aspernatur placeat consequuntur
        praesentium officia necessitatibus corrupti eos debitis eveniet,
        deserunt rem corporis quam quasi, numquam similique! Veniam, minus.
      </p>
      <p className={styles.paragraph}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aut
        deserunt architecto expedita aperiam? Exercitationem veritatis suscipit
        tempora molestiae provident harum aspernatur placeat consequuntur
        praesentium officia necessitatibus corrupti eos debitis eveniet,
        deserunt rem corporis quam quasi, numquam similique! Veniam, minus.
      </p>
    </article>
  );
};

export default Hero;
