import { Box, Flex, Image, VStack, Text } from "@chakra-ui/react";
import bg from "../assets/bgIMG.png";
import man from "../assets/profile.png";
import circle from "../assets/circle.svg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import { FaAccusoft } from "react-icons/fa";

import React from "react";

export const Header = () => {
  return (
    <Flex
      pos="relative"
      bgImage={bg}
      bgPosition="center"
      bgSize="cover"
      w="full"
      h="100vh"
      align="center"
      justify="center"
      id="home"
    >
      <VStack
        pos="absolute"
        top="15%"
        left="10%"
        textTransform="uppercase"
        spacing="10"
      >
        <Flex
          borderRadius="md"
          p="7"
          align="center"
          bg="white"
          gap="2rem"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <Box size="30" as={FaAccusoft} />
          <Flex flexDirection="column">
            <Text>hello,i m</Text>
            <Text fontSize="2xl" fontWeight="bold">
              ibad ahmed
            </Text>
          </Flex>
        </Flex>
        <Flex w="full" justify="flex-end">
          <Text
            w="12rem"
            textAlign="center"
            borderRadius="md"
            p="3"
            bg="white"
            fontSize="sm"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          >
            web developer freelancer
          </Text>
        </Flex>
      </VStack>
      <Image position="absolute" w="30rem" src={circle} />
      <Image w="30rem" src={man} zIndex="1" />
      <Flex
        position="absolute"
        right="25%"
        flexDirection="column"
        justify="space-evenly"
        w="5rem"
        h="full"
      >
        <Box w="6rem">
          <Image
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            bg="white"
            p="2"
            borderRadius="50%"
            w="20rem"
            src={html}
          />
        </Box>
        <Box w="10rem">
          <Image
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            bg="white"
            p="4"
            borderRadius="50%"
            w="20rem"
            src={react}
          />
        </Box>
        <Box w="4rem">
          <Image
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            bg="white"
            p="2"
            borderRadius="50%"
            w="20rem"
            src={css}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
