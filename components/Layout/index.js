import { Navbar, Footer, Meta } from "..";
import styles from "../../styles/Layout.module.css";

const links = [
  { name: "Home", slug: "/" },
  { name: "Give Blood", slug: "/give-blood" },
  { name: "Give Back", slug: "/give-back" },
  { name: "Worship", slug: "/worship" },
  { name: "Bible Study", slug: "/bible-study" },
  { name: "About", slug: "/about" },
  { name: "Contact", slug: "/contact" },
  { name: "Donate", slug: "/donate" },
];
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={styles.mainSection}>
        <Navbar links={links} />
        {children}
      </div>
      <Footer links={links} />
    </>
  );
};

export default Layout;
