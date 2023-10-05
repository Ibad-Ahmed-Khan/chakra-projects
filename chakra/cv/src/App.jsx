import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaWrench,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./App.css";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

function App() {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      spacing={6}
      padding={10}
      width="100%"
      maxWidth="900px"
      margin="auto"
      bgColor="white"
      boxShadow="2xl"
      borderRadius="md"
      border="1px"
      borderColor="gray.200"
    >
      <SimpleGrid columns={2} spacing={20}>
        <Flex justify="center" align="center">
          <Avatar
            size="2xl"
            name="Ibad [Last Name]"
            src={"https://s3.ivisa.com/website-assets/blog/id-photo2.jpg"}
          />
        </Flex>
        <VStack align="start" justify="center">
          <Heading
            as="h1"
            size={{
              base: "md",
              md: "lg",
              lg: "xl",
            }}
            gradient="linear(to-l, teal.400,green.500)"
          >
            Ibad Ahmed Khan
          </Heading>
          <Text
            fontSize={{
              base: "sm",
              md: "md",
              lg: "lg",
            }}
            color="gray.600"
          >
            Frontend Web Developer
          </Text>
        </VStack>
      </SimpleGrid>

      <Divider my={5} />

      <Box width="100%" display="flex" flexDirection="column" gap="3">
        <Flex align="center" mb={2}>
          <Icon as={FaEnvelope} boxSize={6} fill="green.400" mr={3} />
          <Text fontWeight="bold">email@example.com</Text>
        </Flex>
        <Flex align="center">
          <Icon as={FaPhone} boxSize={6} fill="green.400" mr={3} />
          <Text fontWeight="bold">(123) 456-7890</Text>
        </Flex>
      </Box>

      <Divider my={5} />

      <Flex align="center" mb={3}>
        <Icon as={FaBriefcase} boxSize={6} fill="teal.400" mr={3} />
        <Heading as="h2" size="md" color="teal.400">
          About Me
        </Heading>
      </Flex>
      <Text>
        Passionate frontend developer experienced in creating dynamic and
        visually pleasing web applications using React and Chakra UI. Dedicated
        to continuous learning and expanding web development knowledge.
      </Text>

      <Divider my={5} />

      <Flex align="center" mb={3}>
        <Icon as={FaWrench} boxSize={6} fill="teal.400" mr={3} />
        <Heading as="h2" size="md" color="teal.400">
          Skills
        </Heading>
      </Flex>
      <Flex wrap="wrap">
        <Badge
          variant="outline"
          colorScheme="teal"
          m={1}
          p="2"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: "teal.100" }}
        >
          React
        </Badge>
        <Badge
          variant="outline"
          colorScheme="teal"
          m={1}
          p="2"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: "teal.100" }}
        >
          Chakra UI
        </Badge>
        <Badge
          variant="outline"
          colorScheme="teal"
          m={1}
          p="2"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: "teal.100" }}
        >
          JavaScript
        </Badge>
        <Badge
          variant="outline"
          colorScheme="teal"
          m={1}
          p="2"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: "teal.100" }}
        >
          CSS
        </Badge>
      </Flex>

      <Divider my={5} />

      <Flex align="center" mb={3}>
        <Icon as={FaBriefcase} boxSize={6} fill="teal.400" mr={3} />
        <Heading as="h2" size="md" color="teal.400">
          Experience
        </Heading>
      </Flex>
      <Box>
        <Text fontWeight="bold">Frontend Developer, ABC Company</Text>
        <Text>January 2021 - Present</Text>
        <Text mt={2}>
          Developed and maintained company website and improved user engagement
          by 50%.
        </Text>
      </Box>

      <Divider my={5} />

      <Flex align="center" mb={3}>
        <Icon as={FaGraduationCap} boxSize={6} fill="teal.400" mr={3} />
        <Heading as="h2" size="md" color="teal.400">
          Education
        </Heading>
      </Flex>
      <Box>
        <Text fontWeight="bold">
          Bachelor's in Computer Science, XYZ University
        </Text>
        <Text>2018 - 2022</Text>
      </Box>
      <Divider my={5} />

      <Flex align="center" mb={3}>
        <Heading as="h2" size="md" color="teal.400">
          Why Hiring Me is a Great Decision
        </Heading>
      </Flex>
      <VStack align="start" spacing={3}>
        <Text>
          🌟
          <Text as="span" fontWeight="bold">
            No Additional Costs:
          </Text>
          I am willing to initially work without remuneration to showcase my
          dedication and skills.
        </Text>
        <Text>
          🌟
          <Text as="span" fontWeight="bold">
            Long-Term Commitment:
          </Text>
          At 22, I'm at the onset of my career and eager to establish a
          long-term relationship with a company that recognizes my potential.
        </Text>
        <Text>
          🌟
          <Text as="span" fontWeight="bold">
            Peak Health:
          </Text>
          My young age ensures I'm energetic, in optimal health, and ready to
          take on rigorous tasks without frequent sick leaves.
        </Text>
        <Text>
          🌟
          <Text as="span" fontWeight="bold">
            Adaptable and Quick Learner:
          </Text>
          Being young allows me to quickly adapt to evolving technologies and
          methodologies.
        </Text>
        <Text>
          🌟
          <Text as="span" fontWeight="bold">
            Fresh Perspective:
          </Text>
          My unique experiences and educational background provide a fresh
          perspective that can bring innovative ideas to the team.
        </Text>
        <Text>
          🌟
          <Text as="span" fontWeight="bold">
            Dedication and Enthusiasm:
          </Text>
          My passion for the field means I'll consistently put in the effort to
          exceed expectations.
        </Text>
        <Text>
          🌟
          <Text as="span" fontWeight="bold">
            Collaborative Spirit:
          </Text>
          I thrive in team environments and believe in the power of
          collaboration to achieve the best results.
        </Text>
        <Text>
          🌟
          <Text as="span" fontWeight="bold">
            Eager to Grow:
          </Text>
          I am always on the lookout for learning opportunities and feedback,
          ensuring continuous improvement and value addition to the company.
        </Text>
      </VStack>

      <MotionButton
        size="lg"
        colorScheme="teal"
        mt={5}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume
      </MotionButton>
    </MotionBox>
  );
}

export default App;
