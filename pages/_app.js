import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import '../styles/globals.css';

import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress />
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
