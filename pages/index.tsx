import type { NextPage } from "next";
import Head from "next/head";

// Components
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blogger JJ</title>
        <meta
          name="description"
          content="This is a blog about coding, Web Developemnt and programming in general."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
