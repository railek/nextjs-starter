import React from 'react';

import Layout from '@/components/layout';
import Seo from '@/components/elements/seo';

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
