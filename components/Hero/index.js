import React, { useRef, useEffect } from "react";
import styles from "../../styles/Hero.module.css";

const title = "Community";
const paragraphs = [
  `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aut
deserunt architecto expedita aperiam? Exercitationem veritatis suscipit
tempora molestiae provident harum aspernatur placeat consequuntur
praesentium officia necessitatibus corrupti eos debitis eveniet,
deserunt rem corporis quam quasi, numquam similique! Veniam, minus.`,
  `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aut
deserunt architecto expedita aperiam? Exercitationem veritatis suscipit
tempora molestiae provident harum aspernatur placeat consequuntur
praesentium officia necessitatibus corrupti eos debitis eveniet,
deserunt rem corporis quam quasi, numquam similique! Veniam, minus.`,
];

const Hero = ({ image, title, paragraphs }) => {
  const heroRef = useRef();

  useEffect(() => {
    heroRef.current.style = `background-image: linear-gradient(#0004, #0008), url("${image}")`;
  }, []);

  return (
    <article className={styles.hero} ref={heroRef}>
      {title && <h1 className={styles.title}>{title}</h1>}

      {paragraphs &&
        paragraphs.map(
          (paragraph, index) =>
            paragraph && (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            )
        )}
    </article>
  );
};

Hero.defaultProps = {
  title: "Community",
  paragraphs: [
    `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aut
deserunt architecto expedita aperiam? Exercitationem veritatis suscipit
tempora molestiae provident harum aspernatur placeat consequuntur
praesentium officia necessitatibus corrupti eos debitis eveniet,
deserunt rem corporis quam quasi, numquam similique! Veniam, minus.`,
    `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aut
deserunt architecto expedita aperiam? Exercitationem veritatis suscipit
tempora molestiae provident harum aspernatur placeat consequuntur
praesentium officia necessitatibus corrupti eos debitis eveniet,
deserunt rem corporis quam quasi, numquam similique! Veniam, minus.`,
  ],

  image: "/hero.jpg",
};
export default Hero;
