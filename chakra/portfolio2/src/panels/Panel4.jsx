import React from "react";
import { Flex, Image, Text, VStack } from "@chakra-ui/react";

import img1 from "../assets/about01.png";
import img2 from "../assets/about02.png";
import img3 from "../assets/about03.png";
import img4 from "../assets/about04.png";

export const Panel4 = () => {
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
          title="React SPA Design"
          description="Single Page Applications with smooth user experiences."
        />
        <ProjectCard
          image={img4}
          title="State Management"
          description="Efficiently handling application state with Redux & Context API."
        />
        <ProjectCard
          image={img2}
          title="Hooks & Components"
          description="Utilizing React hooks and functional components."
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
          image={img1}
          title="Server-Side Rendering"
          description="Optimized React apps with Next.js for improved SEO."
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
