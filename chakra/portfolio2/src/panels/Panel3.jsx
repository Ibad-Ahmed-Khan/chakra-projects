import React from "react";
import { Flex, Image, Text, VStack } from "@chakra-ui/react";

import img1 from "../assets/about01.png";
import img2 from "../assets/about02.png";
import img3 from "../assets/about03.png";
import img4 from "../assets/about04.png";

export const Panel3 = () => {
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
          title="Responsive App Design"
          description="Creating fluid designs for varying screen sizes."
        />
        <ProjectCard
          image={img3}
          title="App UI/UX Prototyping"
          description="Designing user-friendly interfaces for mobile."
        />
        <ProjectCard
          image={img3}
          title="Mobile-First Strategy"
          description="Prioritizing mobile design for the modern user."
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
          title="Native App Development"
          description="Crafting optimized apps for iOS and Android platforms."
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
