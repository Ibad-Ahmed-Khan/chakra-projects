import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Panel1 } from "../panels/Panel1";
import { Panel2 } from "../panels/Panel2";
import { Panel3 } from "../panels/Panel3";
import { Panel4 } from "../panels/Panel4";
import { Panel5 } from "../panels/Panel5";

export const Work = () => {
  return (
    <VStack
      id="work"
      w="full"
      h="full"
      p={{
        base: "10",
        lg: "110",
      }}
      spacing="20"
      bg="#edf2f8"
    >
      <Heading textAlign="center" textTransform="capitalize">
        my creative portfolio section
      </Heading>
      <Tabs>
        <TabList
          display="flex"
          flexDirection={{
            base: "column",
            lg: "row",
          }}
          alignItems="center"
          justifyContent="center"
          gap="1rem"
        >
          <Tab
            bg="white"
            borderRadius="lg"
            textTransform="capitalize"
            fontWeight="600"
          >
            UI/UX
          </Tab>
          <Tab
            bg="white"
            borderRadius="lg"
            textTransform="capitalize"
            fontWeight="600"
          >
            web app
          </Tab>
          <Tab
            bg="white"
            borderRadius="lg"
            textTransform="capitalize"
            fontWeight="600"
          >
            mobile app
          </Tab>
          <Tab
            bg="white"
            borderRadius="lg"
            textTransform="capitalize"
            fontWeight="600"
          >
            react js
          </Tab>
          <Tab
            bg="white"
            borderRadius="lg"
            textTransform="capitalize"
            fontWeight="600"
          >
            all
          </Tab>
        </TabList>
        <TabPanels mt="50">
          <TabPanel>
            <Panel1 />
          </TabPanel>
          <TabPanel>
            <Panel2 />
          </TabPanel>
          <TabPanel>
            <Panel3 />
          </TabPanel>
          <TabPanel>
            <Panel4 />
          </TabPanel>
          <TabPanel>
            <Panel5 />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};
