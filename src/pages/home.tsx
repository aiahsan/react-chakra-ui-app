import React from "react";
import SideBar from "../components/navigation/sidebar";
import HomeContainer from "../containers/home/index";
import { Box, Flex } from "@chakra-ui/react";
const Home=() => {
  return (
    <Box>
      <Flex justifyContent="flex-start" alignItems="self-start">
        <SideBar />
        <Box marginLeft="256px">
          <HomeContainer />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;