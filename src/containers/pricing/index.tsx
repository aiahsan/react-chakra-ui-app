import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import OnButton from "../../components/navigation/onbox";
import Star from "../../components/icons/star";
import Star1 from "../../components/icons/star1";
import DescriptionCard from "../../components/cards/descriptionCard";
import DescriptionCard2 from "../../components/cards/descriptionCard2";
import woman from "../../images/woman.png";
import men from "../../images/man.png";
import HomeCard from "../../components/cards/homecard";
import LinkIcon from "../../components/icons/link";
import PriceCard from "../../components/cards/priceSmCard";
import LineChart from '../../components/charts/linechart'

interface IconProps {
  img: number;
}
const GetIcon = (props: IconProps) => {
  const { img } = props;
  switch (img) {
    case 1: {
      return (
        <>
          
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2C0 0.89543 0.895431 0 2 0H28C29.1046 0 30 0.895431 30 2V28C30 29.1046 29.1046 30 28 30H2C0.89543 30 0 29.1046 0 28V2Z"
              fill="#FFE9DA"
            />
            <path
              d="M15.0789 19.4944C12.2776 19.4944 9.831 18.4679 8.56104 16.9485C9.03401 18.3118 9.91552 19.4932 11.0835 20.329C12.2516 21.1649 13.6483 21.6139 15.0805 21.6139C16.5127 21.6139 17.9095 21.1649 19.0775 20.329C20.2455 19.4932 21.127 18.3118 21.6 16.9485C20.3269 18.4679 17.8804 19.4944 15.0789 19.4944Z"
              fill="#F37726"
            />
            <path
              d="M15.0786 9.6112C17.8801 9.6112 20.3266 10.6377 21.5966 12.1571C21.1236 10.7937 20.2421 9.61238 19.0741 8.77654C17.906 7.94069 16.5093 7.4917 15.0771 7.4917C13.6449 7.4917 12.2482 7.94069 11.0801 8.77654C9.9121 9.61238 9.0306 10.7937 8.55762 12.1571C9.8307 10.6409 12.2772 9.6112 15.0786 9.6112Z"
              fill="#F37726"
            />
          </svg>
        </>
      );
    }
    case 2: {
      return (
        <>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="30" rx="2" fill="#EBF3FF" />
            <rect
              x="7.3252"
              y="11.8091"
              width="5.74364"
              height="5.74364"
              rx="1"
              fill="#375F9B"
            />
            <rect
              x="16.8979"
              y="7.97998"
              width="5.74364"
              height="5.74364"
              rx="1"
              fill="#375F9B"
            />
            <rect
              width="5.74364"
              height="5.74364"
              rx="1"
              transform="matrix(1 0 0 -1 16.8979 22.02)"
              fill="#375F9B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.1741 10.5327L12.4305 15.6382L11.5825 14.6842L17.3262 9.57875L18.1741 10.5327Z"
              fill="#375F9B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.1741 19.4673L12.4305 14.3618L11.5825 15.3158L17.3262 20.4212L18.1741 19.4673Z"
              fill="#375F9B"
            />
          </svg>
        </>
      );
    }
    case 3: {
      return (
        <>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2C0 0.89543 0.895431 0 2 0H28C29.1046 0 30 0.895431 30 2V28C30 29.1046 29.1046 30 28 30H2C0.89543 30 0 29.1046 0 28V2Z"
              fill="#EBFBE0"
            />
            <path
              d="M15 7.5C10.86 7.5 7.5 10.86 7.5 15C7.5 19.14 10.86 22.5 15 22.5C19.14 22.5 22.5 19.14 22.5 15C22.5 10.86 19.14 7.5 15 7.5ZM12 19.125C10.965 19.125 10.125 18.285 10.125 17.25C10.125 16.215 10.965 15.375 12 15.375C13.035 15.375 13.875 16.215 13.875 17.25C13.875 18.285 13.035 19.125 12 19.125ZM13.125 12C13.125 10.965 13.965 10.125 15 10.125C16.035 10.125 16.875 10.965 16.875 12C16.875 13.035 16.035 13.875 15 13.875C13.965 13.875 13.125 13.035 13.125 12ZM18 19.125C16.965 19.125 16.125 18.285 16.125 17.25C16.125 16.215 16.965 15.375 18 15.375C19.035 15.375 19.875 16.215 19.875 17.25C19.875 18.285 19.035 19.125 18 19.125Z"
              fill="#69A53C"
            />
          </svg>
        </>
      );
    }

    case 4: {
      return (
        <>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M10.2933 17.7259C10.2933 18.2306 9.88033 18.6894 9.32974 18.6894C8.77915 18.6894 8.36621 18.2765 8.36621 17.7259V13.5965C8.36621 13.0918 8.77915 12.6329 9.32974 12.6329C9.88033 12.6329 10.2933 13.0459 10.2933 13.5965V17.7259Z"
                fill="#E7C23D"
              />
              <path
                d="M13.0462 18.8271C13.0462 19.3318 12.6333 19.7906 12.0827 19.7906C11.5321 19.7906 11.165 19.3777 11.165 18.8271V12.5412C11.165 12.0365 11.578 11.5777 12.1286 11.5777C12.6792 11.5777 13.0921 11.9906 13.0921 12.5412V18.8271H13.0462Z"
                fill="#E7C23D"
              />
              <path
                d="M7.49444 16.8082C7.49444 17.3129 7.0815 17.7718 6.53091 17.7718C5.98032 17.7718 5.56738 17.3588 5.56738 16.8082V14.56C5.56738 14.0553 5.98032 13.5965 6.53091 13.5965C7.0815 13.5965 7.49444 14.0553 7.49444 14.56V16.8082Z"
                fill="#E7C23D"
              />
              <path
                d="M15.7991 19.8365C15.7991 20.3412 15.3862 20.8 14.8356 20.8C14.3309 20.8 13.918 20.3412 13.918 19.8365V11.4859C13.918 10.9812 14.3309 10.5224 14.8815 10.5224C15.3862 10.5224 15.845 10.9353 15.845 11.4859V19.8365H15.7991Z"
                fill="#E7C23D"
              />
              <path
                d="M18.8276 19.4235C18.644 19.4235 18.5064 19.3776 18.3229 19.3318L17.1758 18.9647C16.9923 18.9188 16.8546 18.6894 16.9464 18.5059C16.9923 18.3223 17.2217 18.1847 17.4052 18.2765L18.5981 18.6435C18.8276 18.7353 19.1029 18.6894 19.3323 18.5059C19.5617 18.3682 19.6534 18.0929 19.6534 17.8635V10.2012C19.6534 9.83411 19.424 9.51294 19.1029 9.42117L7.86168 6.02588C7.63227 5.93411 7.35697 5.98 7.12756 6.11764C6.94403 6.30117 6.80638 6.53058 6.80638 6.80588V12.0823C6.80638 12.3118 6.62285 12.4494 6.43932 12.4494C6.20991 12.4494 6.07227 12.2659 6.07227 12.0823V6.80588C6.07227 6.30117 6.30168 5.84235 6.71462 5.56706C7.12756 5.24588 7.63227 5.2 8.09109 5.33764L19.2864 8.73294C19.9287 8.91647 20.3876 9.55882 20.3876 10.2471V17.9094C20.3876 18.4141 20.1581 18.8729 19.7452 19.1941C19.4699 19.2859 19.1487 19.4235 18.8276 19.4235Z"
                fill="#E7C23D"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="15.6"
                  height="15.6"
                  fill="white"
                  transform="translate(5.2002 5.2)"
                />
              </clipPath>
            </defs>
          </svg>
        </>
      );
    }

    default: {
      return null;
    }
  }
};

const Home=() => {
  return (

    <Flex justifyContent="center" flexDir="column" m="auto">
      <Flex
        justifyContent="center"
        m="auto"
        width="601px"
        height="124px"
        backgroundColor="white"
        borderRadius="8px"
        padding="30px 30px 0px 30px"
        flexDir="column"
      >
        <Flex
          justifyContent="space-between"
          width="100%"
          height="24px"
          alignItems="center"
        >
          <Flex alignItems="center">
            <GetIcon img={1} />
            <Text
              fontWeight="500"
              fontSize="20px"
              lineHeight="23px"
              alignItems="center"
              marginLeft="10px"
              marginRight="6px"
              color="#F37726"
            >
              Pricing App
            </Text>
            <Star width="16.67" height="15.83px" color="#EEBB42" />
          </Flex>
          <Flex>
            <OnButton
              title="ON"
              style={{ width: "38px", height: "20px",padding:"2px 9px" }}
              fontStyle={{ fontSize: "14px" }}
            />
          </Flex>
        </Flex>

        <Flex justifyContent="space-between">
          <Flex marginTop="20px">
            <Text
              variant="priceTab_active"
            >
              About
            </Text>
            <Text
              variant="priceTab"
            >
              Notebooks
            </Text>
            <Text
              variant="priceTab"
            >
              Comments
            </Text>
          </Flex>
          <Flex marginTop="23.15px">
            <Button
              variant="priceButton"
            >
              Open
              <svg style={{marginLeft:8.5}} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.46657 9.61208L1.53324 9.61208L1.53324 1.67874L5.4999 1.67874V0.54541L1.53324 0.54541C0.904236 0.54541 0.399902 1.05541 0.399902 1.67874L0.399902 9.61208C0.399902 10.2354 0.904236 10.7454 1.53324 10.7454L9.46657 10.7454C10.0899 10.7454 10.5999 10.2354 10.5999 9.61208L10.5999 5.64541L9.46657 5.64541L9.46657 9.61208ZM6.63324 0.54541V1.67874L8.66757 1.67874L3.09724 7.24908L3.89624 8.04808L9.46657 2.47774L9.46657 4.51208H10.5999L10.5999 0.54541L6.63324 0.54541Z" fill="white"/>
</svg>
   </Button>
            <Button bg="#EBF3FF" w="35px" h="35px" ml="10px" padding="9.5px">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.83333 0.645508H7.16667V8.97884H8.83333V0.645508ZM12.8583 2.45384L11.675 3.63717C12.9917 4.69551 13.8333 6.32051 13.8333 8.14551C13.8333 11.3705 11.225 13.9788 8 13.9788C4.775 13.9788 2.16667 11.3705 2.16667 8.14551C2.16667 6.32051 3.00833 4.69551 4.31667 3.62884L3.14167 2.45384C1.525 3.82884 0.5 5.86217 0.5 8.14551C0.5 12.2872 3.85833 15.6455 8 15.6455C12.1417 15.6455 15.5 12.2872 15.5 8.14551C15.5 5.86217 14.475 3.82884 12.8583 2.45384Z" fill="#375F9B"/>
</svg>

            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex className="scrollBox" justifyContent="space-between" m="auto" mt="15px" height="531px" overflow="scroll"  width="601px">
        <Box>
          <DescriptionCard
            bolt="8 Go"
            distance="2 Datasets"
            title="JupyterLab opened yesterday"
            img={woman}
            date="Lun-Ven 07:00-20:00"
          />
          <DescriptionCard2 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit, nisl feugiat molestie semper, velit augue posuere est, sit amet imperdiet purus ante eget urna. Fusce a finibus dui.  ...." />
          <Flex justifyContent="space-between">
            <PriceCard
              title="Last Starting Time"
              subtitle="5"
              spanTitle="min"
            />
            <PriceCard
              title="Max RAM Consumption"
              subtitle="10"
              spanTitle="Go"
            />
          </Flex>
          <Box
          width="310px"
          height= "204px"
          backgroundColor="white"
          marginTop="15px"
          borderRadius="8px"
          >
          <LineChart/>

          </Box>
        </Box>
        <Box width="100%" maxW="240px">
          <Flex justifyContent="space-between" alignItems="center" width="100%">
            <Text
             variant="dataSet"
            >
              Input Datasets
            </Text>
            <Box
              borderRadius="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="20px"
              height="20px"
              bg="white"
            >
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.368309 4.40693L0.368309 3.59348L3.59327 3.59348L3.59327 0.368518L4.40673 0.368518L4.40672 3.59348L7.63169 3.59348L7.63169 4.40693L4.40672 4.40693L4.40672 7.63189L3.59327 7.6319L3.59327 4.40693L0.368309 4.40693Z"
                  fill="#375F9B"
                />
              </svg>
            </Box>
          </Flex>

          <Box>
            <HomeCard
              img={2}
              title="Product Gas Customer"
              subtitle="1 File · CSV · 12 Ko "
              spanText="Allie Long"
              avatarTitle="Dataset By"
              avatar={woman}
              color="#375F9B"
              hoverItem={() => (
                <Flex 
                width="36px"
                justifyContent= "space-between"
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
              title="Oxygen Costs"
              subtitle="1 File · CSV · 16.5 Ko "
              spanText="Allie Long"
              avatarTitle="Dataset By"
              avatar={woman}
              color="#375F9B"
              hoverItem={() => (
                <Flex 
                width="36px"
                justifyContent= "space-between"
                alignItems="center">
                  <Star color="#EEBB42" />

                  <LinkIcon color="#375F9B" />
                </Flex>
              )}
            />
          </Box>

          <Flex justifyContent="space-between" alignItems="center" width="100%">
            <Text
              mt="26px"
             variant="dataSet"
            >
              Output Datasets
            </Text>
          </Flex>

          <Box>
            <HomeCard
              img={2}
              title="Oxygen PG Pricing Brazil"
              subtitle="1 File · CSV · 16.5 Ko · 16.5 Ko "
              avatarTitle="Opened 3 days ago"
              avatar={men}
              color="#375F9B"
              hoverItem={() => (
                <Flex 
                width="36px"
                justifyContent= "space-between"
                alignItems="center">
                  <Star1 color="#EEBB42" />

                  <LinkIcon color="#375F9B" />
                </Flex>
              )}
            />
          </Box>
                
       
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;