import type { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import {
  AppShell,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
} from "@mantine/core";

import styles from "./HeadAFoot.module.css";

const HeadAFoot: NextPage = (props: any) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: "#fff",
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <div>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.violet[3]}
                  mr="xl"
                />
              </div>
            </MediaQuery>
            <Link href="/">
              <a className={styles.navTitle}>Blogger JJ</a>
            </Link>
            <Text style={{ margin: "0 1rem" }}>|</Text>
            <Link href="/">
              <a className={styles.navLinks}>Home</a>
            </Link>
            <Link href="/about">
              <a className={styles.navLinks}>About Me</a>
            </Link>
          </div>
        </Header>
      }
    >
      {/* Blank */}
      {props.children}
    </AppShell>
  );
};

export default HeadAFoot;
