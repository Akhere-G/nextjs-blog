import { Navbar, Footer, Meta } from "..";
import styles from "../../styles/Layout.module.css";
import { useRouter } from "next/router";
const links = [
  { name: "Home", slug: "/", colour: "#000", logo: "/logo.jpeg" },
  { name: "About", slug: "/about", colour: "#000", logo: "/logo.jpeg" },
  { name: "Contact", slug: "/contact", colour: "#000", logo: "/logo.jpeg" },
  {
    name: "Donate",
    slug: "https://www.gofundme.com/f/community-the-hands-and-feet-of-jesus?utm_medium=email&utm_source=product&utm_campaign=p_email%2B2300-co-team-welcome",
    colour: "#000",
    logo: "/logo.jpeg",
  },
];

const programs = [
  {
    name: "Give Blood",
    slug: "/give-blood",
    colour: "#9F2B2C",
    logo: "/giveBloodLogo.jpeg",
  },
  {
    name: "Give Back",
    slug: "/give-back",
    colour: "#690393",
    logo: "/giveBackLogo.jpeg",
  },
  {
    name: "Worship",
    slug: "/worship",
    colour: "#431FDF",
    logo: "/worshipLogo.jpeg",
  },
  {
    name: "Bible Study",
    slug: "/bible-study",
    colour: "#0B0201",
    logo: "/bibleStudyLogo.jpeg",
  },
];

const Layout = ({ children }) => {
  const { pathname } = useRouter();
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
