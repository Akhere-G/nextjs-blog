import { Navbar, Footer, Meta } from "..";
import styles from "../../styles/Layout.module.css";

const links = [
  { name: "Home", slug: "/" },
  { name: "About", slug: "/about" },
  { name: "Contact", slug: "/contact" },
  { name: "Donate", slug: "/donate" },
];

const programs = [
  { name: "Give Blood", slug: "/give-blood" },
  { name: "Give Back", slug: "/give-back" },
  { name: "Worship", slug: "/worship" },
  { name: "Bible Study", slug: "/bible-study" },
];

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={styles.mainSection}>
        <Navbar links={links} programs={programs} />
        {children}
      </div>
      <Footer links={links} programs={programs} />
    </>
  );
};

export default Layout;
