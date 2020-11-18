import React from 'react';
import Head from 'next/head';
import GlobalStyles from '../styles';
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
