import React from "react";
import Logo from "../../components/logo";
import search from "../../images/search.png";
import { Box, Flex, Text } from "@chakra-ui/react";


const TopBar= () => {
  return (
    <Flex height="60px" justifyContent="space-between" padding="20px 15px">
      <Flex>
        <Logo />
        <Text
          fontStyle="normal"
          fontWeight="500"
          fontSize="16px"
          lineHeight="19px"
          marginLeft="9px"
          color="#375F9B"
        >
          Datahub
        </Text>
      </Flex>
      <Box>
        <img src={search} alt=""/>
      </Box>
    </Flex>
  );
};

export default TopBar;