import Layout from '/src/components/Layout';
import Head from 'next/head';
import '/src/styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>stella&apos;s website</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;