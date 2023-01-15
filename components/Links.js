import classes from "./Links.module.css";

export function Links() {
  return (
    <div className={classes.grid}>
      <a href="https://nextjs.org/docs" className={classes.card}>
        <h3 className={classes.title}>Documentation &rarr;</h3>
        <p className={classes.description}>
          Find in-depth information about Next.js features and API.
        </p>
      </a>

      <a href="https://nextjs.org/learn" className={classes.card}>
        <h3 className={classes.title}>Learn &rarr;</h3>
        <p className={classes.description}>
          Learn about Next.js in an interactive course with quizzes!
        </p>
      </a>

      <a href="https://vercel.com/templates" className={classes.card}>
        <h3 className={classes.title}>Templates &rarr;</h3>
        <p className={classes.description}>
          Discover and deploy boilerplate example Next.js projects.
        </p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={classes.card}
      >
        <h3 className={classes.title}>Deploy &rarr;</h3>
        <p className={classes.description}>
          Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
      </a>
    </div>
  );
}
