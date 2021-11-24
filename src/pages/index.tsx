import Home from 'containers/Home';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const HomePage: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{pathname}</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
