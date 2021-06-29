import React from "react";
import Star from "../../components/icons/star";
import Clock from "../../components/icons/clock";
import HomeCard from "../../components/cards/homecard";
import man_2 from "../../images/man_2.png";
import man from "../../images/man.png";
import OnButton from "../../components/navigation/onbox";
import OpenInNew from "../../components/icons/openInNew";
import { Box, Flex, Text } from "@chakra-ui/react";
const Home=() => {
  return (
    <Box marginTop="41px" marginLeft="31px">
      <Flex alignItems="center">
        <Star color="#666666" />
        <Text
        variant="Starred"
        >
          Starred
        </Text>
      </Flex>
      <Flex flexWrap="wrap" maxW="780px">
        <Box>
          
          <HomeCard
            img={1}
            title="Pricing App"
            subtitle="2 Datasets · 32 Go"
            avatarTitle="JupyterLab opened yesterday"
            avatar={man_2}
            color="#F37726"
            hoverItem={() => (
              <Flex
                width="36px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Star color="#EEBB42" />

                <OpenInNew color="#375F9B" />
              </Flex>
            )}
            item={() => <OnButton title="ON" />}
          />
        </Box>
      </Flex>
      <Flex marginTop="39px" marginBottom="21px" alignItems="center">
        <Clock color="#666666" />
        <Text
         variant="Recent"
        >
          Recent
        </Text>
      </Flex>
      <Flex flexWrap="wrap" maxW="780px">
        <Box>
          
          <HomeCard
            img={1}
            title="Pricing App"
            subtitle="2 Datasets · 32 Go"
            avatarTitle="JupyterLab opened yesterday"
            avatar={man_2}
            color="#F37726"
            hoverItem={() => (
              <Flex
                width="36px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Star color="#EEBB42" />
                <OpenInNew color="#375F9B" />
              </Flex>
            )}
            item={() => <OnButton title="ON" />}
          />
        </Box>
        <Box>
          
          <HomeCard
            img={1}
            title="LIM.OPTIM"
            subtitle="2 Datasets · 32 Go"
            avatarTitle="JupyterLab By"
            spanText="Jon Dunn"
            avatar={man}
            color="#F37726"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;