import Head from 'next/head';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
          molestias dolore veritatis. Dignissimos aspernatur adipisci alias
          animi magni hic sit, aut quia quibusdam architecto unde eos cumque
          illum, aliquam nulla tenetur, esse laborum ratione odio quo ullam
          magnam? Odio expedita minima sit laborum praesentium? Eligendi quia
          expedita voluptates ab similique.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
          molestias dolore veritatis. Dignissimos aspernatur adipisci alias
          animi magni hic sit, aut quia quibusdam architecto unde eos cumque
          illum, aliquam nulla tenetur, esse laborum ratione odio quo ullam
          magnam? Odio expedita minima sit laborum praesentium? Eligendi quia
          expedita voluptates ab similique.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
