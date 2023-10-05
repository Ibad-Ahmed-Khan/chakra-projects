import React from "react";
import { Button, Text, VStack, Container } from "@chakra-ui/react";
import { easeInOut, motion } from "framer-motion";

function App() {
  const MotionStack = motion(VStack);

  return (
    <Container>
      <MotionStack
        width="100%"
        maxWidth="800px"
        p="10"
        spacing="10"
        mt="10"
        letterSpacing="1px"
        borderRadius="sm"
        border="1px solid skyblue"
        bg="red"
        _hover={{ bg: "blue" }}
        transition="all 0.4s easeInOut"
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          accusantium? Quae distinctio laborum reiciendis amet, earum
          consectetur atque voluptatibus, voluptates aspernatur natus minus
          voluptate corrupti cumque eius, rem laudantium consequuntur! Vel alias
          natus blanditiis aliquid, saepe incidunt. Dignissimos, placeat
          officiis.
        </Text>
        <Button borderRadius="sm" color="white" bg="blue.300">
          click me
        </Button>
      </MotionStack>
    </Container>
  );
}

export default App;
