import React from "react";
import Star from "../../components/icons/star";
import Star1 from "../../components/icons/star1";
import Clock from "../../components/icons/clock";
import LinkIcon from "../../components/icons/link";
import HomeCard from "../../components/cards/homecard";
import man_2 from "../../images/man_2.png";
import man from "../../images/man.png";
import woman from "../../images/woman.png";
import void_i from "../../images/void.png";
import OnButton from "../../components/navigation/onbox";
import OpenInNew from "../../components/icons/openInNew";
import { Box, Text, Flex } from "@chakra-ui/react";
const Home= () => {
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
      <Flex flexWrap="wrap" maxWidth="780px">
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
            img={2}
            title="Oxygen Costs"
            subtitle="1 File · CSV · 16.5 Ko "
            spanText="Allie Long"
            avatarTitle="Dataset By"
            avatar={woman}
            color="#375F9B"
            hoverItem={() => (
              <Flex
                width="36px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Star color="#EEBB42" />

                <LinkIcon color="#375F9B" />
              </Flex>
            )}
          />
        </Box>
        <Box>
          
          <HomeCard
            img={2}
            title="Product Gas Customer"
            subtitle="1 File · CSV · 12 Ko "
            spanText="Allie Long"
            avatarTitle="Dataset By"
            avatar={man_2}
            color="#375F9B"
            hoverItem={() => (
              <Flex
                width="36px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Star color="#EEBB42" />

                <LinkIcon color="#375F9B" />
              </Flex>
            )}
          />
        </Box>
      </Flex>
      <Flex alignItems="center" marginTop="39px" marginBottom="21px">
        <Clock color="#666666" />
        <Text
         variant="Recent"
        >
          Recent
        </Text>
      </Flex>
      <Flex flexWrap="wrap" maxWidth="780px">
        <Box>
          
          <HomeCard
            img={2}
            title="Customer Churn"
            subtitle="2 Files · CSV · 234 Ko ·"
            spanText="Diana Reese"
            avatarTitle="Dataset By"
            avatar={woman}
            color="#375F9B"
            hoverItem={() => (
              <Flex
                width="36px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Star1 color="#EEBB42" />

                <LinkIcon color="#375F9B" />
              </Flex>
            )}
          />
        </Box>
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
            spanText="Jon Dunn"
            avatarTitle="JupyterLab By"
            avatar={man}
            color="#F37726"
          />
        </Box>
        <Box>
          
          <HomeCard
            img={2}
            title="Oxygen PG Pricing Brazil"
            subtitle="1 File · CSV · 16.5 Ko · 16.5 Ko "
            avatarTitle="Opened 3 days ago"
            avatar={man_2}
            color="#375F9B"
            hoverItem={() => (
              <Flex
                width="36px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Star1 color="#EEBB42" />

                <LinkIcon color="#375F9B" />
              </Flex>
            )}
          />
        </Box>
        <Box>
          
          <HomeCard
            img={4}
            title="Pricing App"
            subtitle="1 Dataset"
            spanText="UserName LastName"
            avatarTitle="BI report by"
            avatar={void_i}
            color="#E6C23D"
            hoverItem={() => (
              <Flex
                width="36px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Star color="#EEBB42" />

                <LinkIcon color="#375F9B" />
              </Flex>
            )}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;