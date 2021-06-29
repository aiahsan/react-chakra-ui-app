import React from "react";
import { Box, Text } from "@chakra-ui/react";
interface Props {
  description: string;
}


const  descriptionCard2 =(props: Props) => {
  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="4px"
      w="346px"
      h="225px"
      pt="32px"
      pl="24px"
      mt="15px"
    >
      <Text color="#0078E9" fontSize="12px" lineHeight="18px">
        + Add Tags
      </Text>
      <Text
        color="#666666"
        fontSize="14px"
        lineHeight="16px"
        mt="19px"
        mb="7px"
        fontWeight="500"
      >
        Description
      </Text>
      <Text fontSize="12px" lineHeight="18px" color="#333333">
        {props.description}
        <span style={{ color: "#0078E9" }}>Afficher plus</span>
      </Text>
    </Box>
  );
};
export default descriptionCard2;
