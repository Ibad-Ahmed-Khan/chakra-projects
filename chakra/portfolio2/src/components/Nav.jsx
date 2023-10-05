import { Flex, Link, Text } from "@chakra-ui/react";

import React from "react";

export const Nav = () => {
  return (
    <Flex
      pos="sticky"
      top="0"
      zIndex="100"
      w="full"
      h="6rem"
      alignItems="center"
      justify="center"
      gap="10"
      px="4"
      textTransform="uppercase"
      bg="#f0f5fc"
    >
      <Text
        position="absolute"
        left="6"
        letterSpacing="3px"
        fontWeight="bold"
        fontSize="xl"
      >
        ibad <span>ahmed</span>
      </Text>
      <Flex justify="space-evenly" w="40%" fontSize="sm">
        <Link href="#home">home</Link>
        <Link href="#about">about</Link>
        <Link href="#work">work</Link>
        <Link href="#skills">skills</Link>
        <Link href="#contact">contact</Link>
      </Flex>
    </Flex>
  );
};

{
  /* <Flex textTransform="uppercase" justify="space-evenly" border="3px solid red">
  <Link href="#">home</Link>
  <Link href="#">about</Link>
  <Link href="#">work</Link>
  <Link href="#">skills</Link>
  <Link href="#">contact</Link>
</Flex>; */
}
