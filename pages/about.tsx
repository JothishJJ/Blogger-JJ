import type { NextPage } from "next";

import { useMantineTheme } from "@mantine/core";

import HeadAFoot from "../components/HeadAFoot";

const About: NextPage = () => {
  const theme = useMantineTheme();
  return (
    <>
      {/* @ts-ignore */}
      <HeadAFoot>
        <h1>About Me</h1>
      </HeadAFoot>
    </>
  );
};

export default About;
