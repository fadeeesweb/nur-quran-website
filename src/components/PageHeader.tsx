import styles from "./PageHeader.module.css";

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  updated?: string;
};

export function PageHeader({ eyebrow, title, lede, updated }: Props) {
  return (
    <header className={styles.header} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className={styles.title}>{title}</h1>
      {lede ? <p className={styles.lede}>{lede}</p> : null}
      {updated ? <p className={styles.updated}>Last updated: {updated}</p> : null}
    </header>
  );
}
