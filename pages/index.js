import Head from 'next/head';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis molestias
        dolore veritatis. Dignissimos aspernatur adipisci alias animi magni hic
        sit, aut quia quibusdam architecto unde eos cumque illum, aliquam nulla
        tenetur, esse laborum ratione odio quo ullam magnam? Odio expedita
        minima sit laborum praesentium? Eligendi quia expedita voluptates ab
        similique.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis molestias
        dolore veritatis. Dignissimos aspernatur adipisci alias animi magni hic
        sit, aut quia quibusdam architecto unde eos cumque illum, aliquam nulla
        tenetur, esse laborum ratione odio quo ullam magnam? Odio expedita
        minima sit laborum praesentium? Eligendi quia expedita voluptates ab
        similique.
      </p>
      <Link href='/ninjas'>
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
