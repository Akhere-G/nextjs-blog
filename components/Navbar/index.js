import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.css";
import { Menu } from "@material-ui/icons";

const mainPages = ["/", "/about", "/contact", "/donate"];

const Navbar = ({ links = [], programs = [] }) => {
  const [open, setOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const { pathname } = useRouter();

  let currentPage;

  if (pathname === "/") {
    currentPage = links.find(link => link.slug === "/");
  } else {
    currentPage = links.find(link => link.slug === pathname);

    currentPage =
      currentPage ||
      programs.find(program => pathname.startsWith(program.slug));

    currentPage = currentPage || {
      name: "error",
      slug: "/error",
      colour: "#000",
      logo: "/logo.jpeg",
    };
  }

  return (
    <header
      className={styles.container}
      onMouseLeave={() => {
        setOpen(false);
        setIsSubmenuOpen(false);
      }}
      onBlurCapture={e => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
          setIsSubmenuOpen(false);
        }
      }}
      style={{ backgroundColor: currentPage.colour }}
    >
      <nav className={styles.navbar}>
        <Link
          href='/'
          className={styles.logo}
          onClick={() => {
            setOpen(false);
          }}
        >
          <img src={currentPage.logo} width='60' height='60' />
        </Link>

        <ul className={`${styles.navbarLinks} ${open ? styles.open : ""}`}>
          {links.map((link, index) => {
            const { name, slug } = link;
            const activeClass = pathname === slug ? styles.activeLink : "";
            return (
              <li key={index} className={`${styles.navbarLink} ${activeClass}`}>
                <Link href={slug}>
                  <a
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}
          <li
            className={`${styles.navbarLink} ${styles.programItem}`}
            onMouseOver={() => setIsSubmenuOpen(true)}
          >
            <a>Programs</a>
            <ul
              className={`${styles.submenu} ${
                isSubmenuOpen ? styles.openSubmenu : ""
              }`}
            >
              {programs.map((link, index) => {
                const { name, slug } = link;
                const activeClass = pathname === slug ? styles.activeLink : "";
                return (
                  <li
                    key={index}
                    className={`${styles.navbarLink} ${activeClass}`}
                  >
                    <Link href={slug}>
                      <a
                        onClick={() => {
                          setOpen(false);
                          setIsSubmenuOpen(false);
                        }}
                      >
                        {name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        {links.length > 0 && (
          <button
            aria-label='toggle-menu'
            className={styles.navbarBtn}
            onClick={() => {
              setOpen(prev => !prev);
            }}
          >
            <Menu />
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
