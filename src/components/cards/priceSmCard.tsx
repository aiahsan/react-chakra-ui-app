import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
interface Props {
  title: string;
  subtitle: string;
  spanTitle: string;
}
const PriceCard=(props: Props) => {
  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="4px"
      w="162px"
      h="87px"
      pt="20px"
      pl="20px"
      mt="15px"
    >
      <Text color="#666666" fontSize="12px" fontWeight="500" lineHeight="14px">
        {props.title}
      </Text>
      <Flex mt="10px" alignItems="flex-end">
        <Text
          color="#375F9B"
          fontSize="20px"
          fontWeight="500"
          lineHeight="23px"
        >
          {props.subtitle}
        </Text>
        <Text
          color="#375F9B"
          fontSize="12px"
          fontWeight="500"
          lineHeight="14px"
          ml="5px"
        >
          {props.spanTitle}
        </Text>
      </Flex>
    </Box>
  );
};

export default PriceCard;