import classes from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={classes.header}>
      <Link legacyBehavior href="/">
        <a className={classes.anchor}>Index</a>
      </Link>
      <Link legacyBehavior href="/about">
        <a className={classes.anchor}>About</a>
      </Link>
    </header>
  );
}
