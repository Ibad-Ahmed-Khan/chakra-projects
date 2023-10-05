import React from "react";
import { VStack, Image, Text, SimpleGrid, Heading } from "@chakra-ui/react";

import img1 from "../assets/about02.png";
import img2 from "../assets/about01.png";
import img3 from "../assets/about03.png";
import img4 from "../assets/about04.png";

const projects = [
  {
    image: img1,
    title: "web designer",
    description:
      "Lorem, ipsum dolor sit amet consec adipisicing elit. Fugit, repellat repellendus in eveniet minus .",
  },
  {
    image: img2,
    title: "react developer",
    description: "User-focused design for an optimal shopping experience.",
  },
  {
    image: img3,
    title: "backend developer",
    description: "Creating engaging user interfaces for various platforms.",
  },
  {
    image: img4,
    title: "frontend developer",
    description: "Optimized designs for mobile devices and touch interactions.",
  },
];

const ProjectCard = ({ image, title, description }) => {
  return (
    <VStack
      align="flex-start"
      spacing="3"
      borderRadius="lg"
      w="15rem"
      h="20rem"
      bg="white"
      p="5"
    >
      <Image w="17rem" borderRadius="xl" src={image} />
      <Text fontSize="lg" textTransform="capitalize" fontWeight="bold">
        {title}
      </Text>
      <Text>{description}</Text>
    </VStack>
  );
};

export const About = () => {
  return (
    <VStack
      spacing="20"
      h="100vh"
      w="full"
      align="center"
      justify="center"
      id="about"
    >
      <Heading textAlign="center" px="20rem" textTransform="capitalize">
        i know that good design means good busniess
      </Heading>
      <SimpleGrid columns="4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
