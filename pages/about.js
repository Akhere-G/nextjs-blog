import React from "react";
import Image from "next/image";
import { Hero } from "../components";
import styles from "../styles/About.module.css";

const paragraphs1 = [
  `Magni
labore molestiae laborum debitis nisi error dolor quod, aspernatur,
perspiciatis officiis vero amet facere rerum nemo illo. Voluptatibus
possimus vel assumenda inventore! Dicta voluptatem atque tempore
voluptatibus expedita, quasi aspernatur, cupiditate optio neque a fugit!
`,
];

const paragraphs2 = [
  `Eligendi distinctio
repudiandae sapiente porro eos laboriosam animi molestiae ad optio quasi
iusto accusamus dolorum ducimus, rerum et! Sit dolorem exercitationem
quibusdam nemo praesentium laborum aut error, eos incidunt earum atque
maxime ratione architecto cumque, suscipit recusandae accusantium?`,
];

const paragraphs3 = [
  `Amet adipisci,
similique aut doloremque iste voluptas, veniam ipsa minus eligendi fuga
ea ad voluptatum tenetur pariatur eaque? Repudiandae optio totam a.
Officiis fugit earum numquam, nam architecto, odit asperiores, quas
incidunt saepe eius expedita minima cum distinctio. `,
];

const About = () => {
  return (
    <div>
      <article className={styles.images}>
        <Hero image='/family.jpg' title='Community' paragraphs={paragraphs1} />
        <Hero image='/group.jpg' title='Community' paragraphs={paragraphs1} />
        <Hero image='/hugging.jpg' title='Community' paragraphs={paragraphs1} />
      </article>
      <article className={styles.info}>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quae quis incidunt. Sed fuga nobis debitis laboriosam, accusantium
          enim voluptatibus totam odit, in natus deserunt. Consequuntur,
          repellendus! Voluptatum, ab! Deserunt excepturi sequi architecto
          consectetur, dicta tenetur, ducimus itaque sunt id, doloribus hic
          labore. Fuga minima quia illum similique itaque quam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quae quis incidunt. Sed fuga nobis debitis laboriosam, accusantium
          enim voluptatibus totam odit, in natus deserunt. Consequuntur,
          repellendus! Voluptatum, ab! Deserunt excepturi sequi architecto
          consectetur, dicta tenetur, ducimus itaque sunt id, doloribus hic
          labore. Fuga minima quia illum similique itaque quam?
        </p>
      </article>
      <article className={styles.info}>
        <h2>Mantras</h2>
        <section className={styles.mantras}>
          <div>
            <Image
              src='/mantra1.png'
              width={250}
              height={250}
              layout='intrinsic'
            />
          </div>
          <div className={styles.mantraRight}>
            <Image
              src='/mantra2.jpg'
              width={250}
              height={250}
              layout='intrinsic'
            />
          </div>
          <div>
            <Image
              src='/mantra3.png'
              width={250}
              height={250}
              layout='intrinsic'
            />
          </div>
        </section>
      </article>
    </div>
  );
};

export default About;
