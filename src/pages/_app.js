import Layout from '/src/components/Layout';
import '/src/styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <>
      <head>
        <title>stella's website</title>
      </head>
      </>
        <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
