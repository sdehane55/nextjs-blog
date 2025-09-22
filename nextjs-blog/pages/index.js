import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts-json'; // your JSON-based data
import Link from 'next/link';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[]</p>Hello. My name is Steve A. I am a web developer from Santa Rosa, CA
        <p>
          (Говоря о духовном наследии святого Николая Японского, гость упомянул о дневнике святителя,{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a><br>
          <a href="https://patriarchia.ru/article/117400?base=news">RECEIVE PARAMETER VALUE</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {date} {/* display division directly instead of Date component */}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
