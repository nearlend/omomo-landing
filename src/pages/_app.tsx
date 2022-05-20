import type { AppProps } from 'next/app';
import '../styles/index.scss';
import Layout from '../layout';

const NextApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default NextApp;
