import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Links } from "../components/Links";
import Headline from "../components/Headline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Headline page="index" />
        <Links />
      </main>
      <Footer />
    </>
  );
}
