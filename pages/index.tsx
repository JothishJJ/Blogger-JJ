import type { NextPage } from "next";
import Head from "next/head";

import { MantineProvider } from "@mantine/core";

// Components
import HeadAFoot from "../components/HeadAFoot";

const Home: NextPage = () => {
  return (
    <MantineProvider
      theme={{
        colors: {
          violet: ["#9053E0", "#BB9AE6", "#6F40AD", "#3E2461", "#4F4161"],
        },
      }}
    >
      <div>
        <Head>
          <title>Blogger JJ</title>
          <meta
            name="description"
            content="This is a blog about coding, Web Developemnt and programming in general."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* @ts-ignore */}
        <HeadAFoot>
          <h1>This is a very cool website Guys! </h1>
        </HeadAFoot>
      </div>
    </MantineProvider>
  );
};

export default Home;
