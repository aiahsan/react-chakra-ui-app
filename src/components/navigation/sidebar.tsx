import React from "react";
import TopBar from "./topBar";
import ItemBar from "./sidebaritem";
import ItemBar2 from "./sidebaritem2";
import Star from "../icons/star";
import OnButton from "../navigation/onbox";
import OpenInNew from "../icons/openInNew";
import { Box, Flex } from "@chakra-ui/react";
import {useHistory} from 'react-router-dom'

const Sidebar = () => {
  const history=useHistory();
  return (
    <Box w="256px" bg="#FFFFFF" position="fixed" h="100%">
      <TopBar />
      <ItemBar onClick={()=>history.push('/')} title="Home" img={1} />
      <ItemBar onClick={()=>history.push('/')} title="Data" img={2} />
      <ItemBar     onClick={()=>history.push('/jupyter')}
 title="JupyterLabs" img={3} />
      <ItemBar onClick={()=>history.push('/')} title="PowerBis" img={4} />
      <Box
        w="100%"
        height="1px"
        margin="10px 0px"
        border="1px solid #D9D9D9"
      ></Box>
      <ItemBar2
        color="#F37726"
        title="PowerBis"
        img={1}
        hoverItem={() => (
          <Flex width="36px" justifyContent="space-between" alignItems="center">
            <OpenInNew color="#375F9B" />
            <Star color="#EEBB42" />
          </Flex>
        )}
        item={() => <OnButton title="ON" />}
      />
      <ItemBar2
        color="#375F9B"
        title="Oxygen Costs"
        hoverItem={() => <Star color="#EEBB42" />}
        img={2}
      />
      <ItemBar2
        color="#375F9B"
        title="Product Gas Customers"
        hoverItem={() => <Star color="#EEBB42" />}
        img={2}
      />
    </Box>
  );
};
export default Sidebar;
