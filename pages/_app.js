import React from 'react';
import GlobalStyles from '../styles';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Seo />
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
