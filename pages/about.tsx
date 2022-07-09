import type { NextPage } from "next";

import { useMantineTheme, Container, Avatar, Center } from "@mantine/core";

import HeadAFoot from "../components/HeadAFoot";

import styles from "./About.module.css";

const About: NextPage = () => {
  const theme = useMantineTheme();
  return (
    <>
      {/* @ts-ignore */}
      <HeadAFoot>
        <Container>
          <h1 className={styles.heading}>About Me</h1>
          <Center>
            <Avatar
              size={200}
              alt="Profile Image"
              src="https://pbs.twimg.com/profile_images/1341432402527145984/9vWLtNpz_400x400.jpg"
              radius={100}
            />
          </Center>
          <p className={styles.paragraph}>
            Hi my name is Jothish JJ and I am the guy who is writing this blog.
            I hope that by creating this blog I could improve my programming
            skills and it could be a lot of fun as well. This blog will also
            will be about tutorials on various things like Next Js which could
            help you guys as well.
          </p>
        </Container>
      </HeadAFoot>
    </>
  );
};

export default About;
