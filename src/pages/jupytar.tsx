import React from 'react';
import SideBar from '../components/navigation/jupyternav';
import JupyterContainer from '../containers/jupyter/index'
import { Box, Flex } from "@chakra-ui/react";

const Jupytar=() => {
  return  <Box>
  <Flex justifyContent="flex-start" alignItems="self-start">
    <SideBar />
    <Box marginLeft="256px">
      <JupyterContainer />
    </Box>
  </Flex>
</Box>
}
export default Jupytar;