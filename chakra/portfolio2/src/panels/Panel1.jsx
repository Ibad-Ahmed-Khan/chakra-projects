import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/about01.png";
import img2 from "../assets/about02.png";
import img3 from "../assets/about03.png";
import img4 from "../assets/about04.png";

export const Panel1 = () => {
  return (
    <VStack h="full" spacing="20">
      <Flex
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        align="center"
        justify="center"
        gap="3rem"
      >
        <ProjectCard
          image={img1}
          title="Modern Web Design"
          description="An innovative approach to modern web aesthetics."
        />
        <ProjectCard
          image={img2}
          title="E-commerce UX Concept"
          description="User-focused design for an optimal shopping experience."
        />
        <ProjectCard
          image={img4}
          title="Interactive Prototyping"
          description="Creating engaging user interfaces for various platforms."
        />
      </Flex>
      <Flex
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        align="center"
        justify="center"
        gap="3rem"
      >
        <ProjectCard
          image={img3}
          title="Mobile First Design"
          description="Optimized designs for mobile devices and touch interactions."
        />
        <ProjectCard
          image={img3}
          title="Dashboard UI"
          description="Crafting intuitive dashboard interfaces for analytics and data."
        />
      </Flex>
    </VStack>
  );
};

const ProjectCard = ({ image, title, description }) => {
  return (
    <VStack borderRadius="lg" w="15rem" h="20rem" spacing="6" bg="white" p="5">
      <Image borderRadius="lg" src={image} />
      <Text textTransform="capitalize" fontWeight="bold">
        {title}
      </Text>
      <Text color="grey" fontSize="sm" textTransform="capitalize">
        {description}
      </Text>
    </VStack>
  );
};
