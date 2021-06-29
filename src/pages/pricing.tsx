import React from "react";
import SideBar from "../components/navigation/sidebar";
import { Box, Flex } from "@chakra-ui/react";
import PricingContainer from "../containers/pricing/index";

const Pricing=() => {
  return (
    <Box>
      <Flex justifyContent="flex-start" alignItems="self-start">
        <SideBar />
        <Box width="100%" marginLeft="256px" marginTop="30px">
          <PricingContainer />
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;