import React from "react";
import { Flex, Image, Text, VStack } from "@chakra-ui/react";

import img1 from "../assets/about01.png";
import img2 from "../assets/about02.png";
import img3 from "../assets/about03.png";
import img4 from "../assets/about04.png";

export const Panel5 = () => {
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
          image={img3}
          title="Responsive Web Design"
          description="Modern designs that fit on all device sizes."
        />
        <ProjectCard
          image={img1}
          title="E-commerce & Retail"
          description="Digital solutions for online shopping experiences."
        />
        <ProjectCard
          image={img4}
          title="Interactive Prototypes"
          description="Engaging interfaces and dynamic web elements."
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
          image={img4}
          title="Application Development"
          description="From SPAs to full-fledged web applications."
        />
        <ProjectCard
          image={img1}
          title="Application Development"
          description="From SPAs to full-fledged web applications."
        />
        <ProjectCard
          image={img2}
          title="Application Development"
          description="From SPAs to full-fledged web applications."
        />
        <ProjectCard
          image={img3}
          title="Application Development"
          description="From SPAs to full-fledged web applications."
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
