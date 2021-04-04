import React from "react";
import styles from "../../styles/Footer.module.css";
import Link from "next/link";
import { Phone, Email, Facebook, Twitter, Instagram } from "@material-ui/icons";
import { useRouter } from "next/router";
import Image from "next/image";

const socials = [
  { link: "https://facebook.com", Icon: Facebook },
  { link: "https://twitter.com", Icon: Twitter },
  { link: "https://instagram.com", Icon: Instagram },
];
const Footer = ({ links = [] }) => {
  const { pathname } = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <h2>Logo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
            debitis ad! Possimus, deleniti omnis? Tempora recusandae quod
            debitis quae alias!
          </p>
          <div className={styles.contactCard}>
            <Phone size='small' />
            <p>123-456-789</p>
          </div>
          <div className={styles.contactCard}>
            <Email size='small' />
            <p>example@example.co.uk</p>
          </div>
          <div className={styles.socials}>
            <h2>Contact Us</h2>
            <ul className={styles.socialsList}>
              {socials.map(social => {
                const { Icon, link } = social;

                return (
                  <a key={link} href={link} rel='noreferrer' target='_blank'>
                    <Icon className={styles.social} />
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
        <nav className={styles.footerRight}>
          <h2>Quick Links</h2>
          <ul className={styles.links}>
            {links.map((link, index) => {
              const { name, slug } = link;
              const activeClass = pathname === slug ? styles.activeLink : "";
              return (
                <li key={index} className={`${styles.link} ${activeClass}`}>
                  <Link key={slug} href={slug}>
                    <a>{name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
