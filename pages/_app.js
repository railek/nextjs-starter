import React from 'react';
import Seo from '@/components/seo';
import Layout from '@/components/layout';
import GlobalStyles from '../styles';

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
