import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { GetStaticProps } from "next";

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

import { getSortedPostsData } from "../lib/coding";

import styles from "./Home.module.css";

// @ts-ignore
const Home: NextPage = ({ allPostsData }) => {
  const theme = useMantineTheme();

  type postData = {
    id: number;
    title: string;
    description: string;
  };

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
            {/* @ts-ignore */}
            <ul className={styles.List} type="none">
              {allPostsData.map(({ id, title, description }: postData) => (
                <Link href={"/coding/" + id} key={id}>
                  <div key={id}>
                    <li className={styles.listTitle}>
                      {title}
                      <br />
                    </li>
                    <li className={styles.listDescription}>{description}</li>
                  </div>
                </Link>
              ))}
            </ul>
          </Container>
        </HeadAFoot>
      </div>
    </MantineProvider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
