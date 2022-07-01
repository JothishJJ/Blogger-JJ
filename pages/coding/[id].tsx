import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import { getAllPostIds, getPostData } from "../../lib/coding";

import { Container } from "@mantine/core";

import HeadAFoot from "../../components/HeadAFoot";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

// @ts-ignore</HeadAFoot>
const Page: NextPage = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {/* @ts-ignore */}
      <HeadAFoot>
        <Container>
          <div
            id="blog"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </Container>
      </HeadAFoot>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};

export default Page;
