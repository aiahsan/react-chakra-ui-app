import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
interface Props {
  title: string;
  date: string;
  img: string;
  distance: string;
  bolt: string;
}
interface IconProps {
  icon: number;
}
const GetIcon = (props: IconProps) => {
  const { icon } = props;
  switch (icon) {
    case 1: {
      return (
        <>
          
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.33333H11.3333V0H10V1.33333H3.33333V0H2V1.33333H1.33333C0.6 1.33333 0 1.93333 0 2.66667V13.3333C0 14.0667 0.6 14.6667 1.33333 14.6667H12C12.7333 14.6667 13.3333 14.0667 13.3333 13.3333V2.66667C13.3333 1.93333 12.7333 1.33333 12 1.33333ZM12 13.3333H1.33333V4.66667H12V13.3333Z"
              fill="#666666"
            />
          </svg>
        </>
      );
    }
    case 2: {
      return (
        <>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.24984 13.75H2.49984L3.24984 8.5H0.624841C0.189841 8.5 0.197341 8.26 0.339841 8.005C0.482341 7.75 0.377341 7.945 0.392341 7.915C1.35984 6.205 2.81484 3.655 4.74984 0.25H5.49984L4.74984 5.5H7.37484C7.74234 5.5 7.79484 5.7475 7.72734 5.8825L7.67484 5.995C4.71984 11.1625 3.24984 13.75 3.24984 13.75Z"
              fill="#666666"
            />
          </svg>
        </>
      );
    }
    case 3: {
      return (
        <>
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="2.97815"
              width="4.46727"
              height="4.46727"
              rx="1"
              fill="#666666"
            />
            <rect
              x="7.44556"
              width="4.46728"
              height="4.46727"
              rx="1"
              fill="#666666"
            />
            <rect
              width="4.46728"
              height="4.46727"
              rx="1"
              transform="matrix(1 0 0 -1 7.44556 10.92)"
              fill="#666666"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.43809 1.98542L3.97081 5.95633L3.31128 5.21436L7.77856 1.24345L8.43809 1.98542Z"
              fill="#666666"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.43809 8.9345L3.97081 4.96359L3.31128 5.70557L7.77856 9.67647L8.43809 8.9345Z"
              fill="#666666"
            />
          </svg>
        </>
      );
    }

    default: {
      return null;
    }
  }
};
const descriptionCard=(props: Props) => {
  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="4px"
      w="346px"
      h="185px"
      pt="28px"
      pl="20px"
    >
      <Flex alignItems="center">
        <img width="26.23" height="26.23"  alt="" src={props.img} />
        <Text color="#929292" fontSize="12px" lineHeight="16px" ml="20px">
          {props.title}
        </Text>
      </Flex>
      <Box mt="21px">
        <Flex mt="15px">
          <Box ml="8px">
            <GetIcon icon={1} />
          </Box>
          <Text variant="descriptionText">
            {props.date}
          </Text>
        </Flex>
        <Flex mt="15px">
          <Box ml="8px">
            <GetIcon icon={2} />
          </Box>
          <Text variant="descriptionText">
            {props.bolt}
          </Text>
        </Flex>
        <Flex mt="15px">
          <Box ml="8px">
            <GetIcon icon={3} />
          </Box>
          <Text  variant="descriptionText">
            {props.distance}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default descriptionCard;