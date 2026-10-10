import Link from "next/link";
import { Logo } from "@/components/Logo";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <Logo size={72} alt="" />
        <p className="eyebrow">404</p>
        <h1 className={styles.title}>This page could not be found.</h1>
        <p className={styles.text}>
          The link may be out of date, or the page may have moved.
        </p>
        <Link href="/" className="btn btn--primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
