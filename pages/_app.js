import Layout from '../components/Layout';
import '../styles/globals.css';

export default function MyApp({ meta, Component, pageProps }) {
  console.log(meta);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
