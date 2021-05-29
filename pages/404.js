import Link from "next/link";
import styles from "../styles/NotFound.module.css";

const NotFoundPage = () => {
  return (
    <div className='container'>
      <div className={styles.notFound}>
        <h1>Ooooooops...</h1>
        <h2>That page doesn't exist</h2>
        <p>
          Go back to the{" "}
          <Link href='\'>
            <a className={styles.goHomeLink}>Homepage</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
