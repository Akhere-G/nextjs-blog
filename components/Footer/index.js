import React from "react";
import styles from "../../styles/Footer.module.css";
import Link from "next/link";
import { Email, LinkedIn, Instagram } from "@material-ui/icons";
import { useRouter } from "next/router";
import Image from "next/image";

const socials = [
  {
    link: "https://uk.linkedin.com/company/community-the-hands-and-feet-of-jesus?trk=public_profile_topcard-current-company",
    Icon: LinkedIn,
  },
  {
    link: "https://instagram.com/com.munity?igshid=1t0frdo7iupr5",
    Icon: Instagram,
  },
];
const Footer = ({ links = [], programs = [] }) => {
  const { pathname } = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <Image src='/logo.jpeg' width={150} height={150} />
          <p>
            WE are the hands and feet of Jesus; empowering, equipping and
            building up communities by spreading The Word and running outreach
            programs
          </p>
          {/* TODO: Add phone number */}
          {/* <div className={styles.contactCard}>
            <Phone size='small' /> 
            <p>123-456-789</p>
          </div> */}
          <div className={styles.contactCard}>
            <Email size='small' />
            <p>Enquires@communitythaf.com</p>
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
            <h3>Programs</h3>
            {programs.map((link, index) => {
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
