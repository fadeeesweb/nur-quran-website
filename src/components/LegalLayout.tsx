import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";
import styles from "./LegalLayout.module.css";

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  updated?: string;
  children: ReactNode;
};

/** Shared chrome for the privacy and terms pages. */
export function LegalLayout({ eyebrow, title, lede, updated, children }: Props) {
  return (
    <>
      <section className={styles.band}>
        <div className="container">
          <PageHeader eyebrow={eyebrow} title={title} lede={lede} updated={updated} />
        </div>
      </section>
      <section className={styles.body}>
        <div className="container">
          <article className="prose">{children}</article>
        </div>
      </section>
    </>
  );
}
