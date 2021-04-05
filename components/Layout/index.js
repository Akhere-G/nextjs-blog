import { Navbar, Footer, Meta } from "..";
import styles from "../../styles/Layout.module.css";

const links = [
  { name: "Home", slug: "/" },
  { name: "Events", slug: "/events" },
  { name: "About", slug: "/about" },
  { name: "Contact", slug: "/contact" },
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
