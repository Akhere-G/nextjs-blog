import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.css";
import { Menu } from "@material-ui/icons";

const Navbar = ({ links = [], programs = [] }) => {
  const [open, setOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const { pathname } = useRouter();

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
    >
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>
          <Link
            href='/'
            className={styles.logo}
            onClick={() => {
              setOpen(false);
            }}
          >
            Logo
          </Link>
        </h1>

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
