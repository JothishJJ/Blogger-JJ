import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import {
  MantineProvider,
  Container,
  Title,
  Text,
  useMantineTheme,
  Avatar,
} from "@mantine/core";

// Components
import HeadAFoot from "../components/HeadAFoot";

import styles from "./Home.module.css";

const Home: NextPage = () => {
  const theme = useMantineTheme();

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
          <Container>
            <Avatar
              className={styles.bioImage}
              size={150}
              radius={100}
              alt="Profile"
              src="https://pbs.twimg.com/profile_images/1341432402527145984/9vWLtNpz_400x400.jpg"
            />
            <Title
              align="center"
              className={styles.title}
              style={{ color: theme.colors.violet[3] }}
            >
              Hi, I&#39;m Jothish JJ
            </Title>
            <Text className={styles.bio}>
              This blog is about programming and you see my about me{" "}
              <Link href="/about">
                <a>here...</a>
              </Link>{" "}
              Check some of my blogs bellow 👇
            </Text>
          </Container>
        </HeadAFoot>
      </div>
    </MantineProvider>
  );
};

export default Home;
