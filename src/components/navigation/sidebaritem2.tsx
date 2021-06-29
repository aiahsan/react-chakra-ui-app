import React from "react";
import { Icon, Flex, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  img: number;
  hoverItem?: () => React.ReactNode;
  item?: () => React.ReactNode;
  color: string;
}
interface IconProps {
  img: number;
  color: String;
}
const GetIcon = (props: IconProps) => {
  const { img } = props;
  switch (img) {
    case 1: {
      return (
        <>
          
          <path
            d="M0 2C0 0.89543 0.895431 0 2 0H20C21.1046 0 22 0.895431 22 2V20C22 21.1046 21.1046 22 20 22H2C0.89543 22 0 21.1046 0 20V2Z"
            fill="#FFE9DA"
          />
          <path
            d="M11.0576 14.2958C9.00328 14.2958 7.20914 13.543 6.27783 12.4288C6.62468 13.4286 7.27112 14.2949 8.12767 14.9079C8.98423 15.5208 10.0085 15.8501 11.0588 15.8501C12.1091 15.8501 13.1333 15.5208 13.9899 14.9079C14.8464 14.2949 15.4929 13.4286 15.8397 12.4288C14.9061 13.543 13.112 14.2958 11.0576 14.2958Z"
            fill="#F37726"
          />
          <path
            d="M11.0575 7.0482C13.1118 7.0482 14.906 7.80098 15.8373 8.91517C15.4904 7.91539 14.844 7.04907 13.9875 6.43611C13.1309 5.82316 12.1066 5.4939 11.0563 5.4939C10.0061 5.4939 8.98179 5.82316 8.12523 6.43611C7.26868 7.04907 6.62224 7.91539 6.27539 8.91517C7.20898 7.80328 9.00312 7.0482 11.0575 7.0482Z"
            fill="#F37726"
          />
        </>
      );
    }
    case 2: {
      return (
        <>
          <path
            d="M0 2C0 0.89543 0.895431 0 2 0H20C21.1046 0 22 0.895431 22 2V20C22 21.1046 21.1046 22 20 22H2C0.89543 22 0 21.1046 0 20V2Z"
            fill="#EBF3FF"
          />
          <rect
            x="5.37207"
            y="8.66003"
            width="4.212"
            height="4.212"
            rx="1"
            fill="#375F9B"
          />
          <rect
            x="12.3921"
            y="5.85205"
            width="4.212"
            height="4.212"
            rx="1"
            fill="#375F9B"
          />
          <rect
            width="4.212"
            height="4.212"
            rx="1"
            transform="matrix(1 0 0 -1 12.3921 16.1481)"
            fill="#375F9B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.328 7.72401L9.11599 11.468L8.49414 10.7684L12.7061 7.02443L13.328 7.72401Z"
            fill="#375F9B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.328 14.2761L9.11599 10.5321L8.49414 11.2317L12.7061 14.9757L13.328 14.2761Z"
            fill="#375F9B"
          />
        </>
      );
    }

    default: {
      return null;
    }
  }
};
const SideBarItem=(props: Props) => {
  const { img, title, color, hoverItem, item } = props;
  const [display, setdisplay] = React.useState(false);
  
  return (
    <Flex
      height="36px"
      padding="10px 15px"
      justifyContent="space-between"
      _hover={{
        backgroundColor: "rgb(248, 248, 248)",
        cursor: "pointer",
      }}
      onMouseEnter={() => setdisplay(true)}
      onMouseLeave={() => setdisplay(false)}
    >
      <Flex justifyContent="center" alignItems="center">
        <Icon width="22" height="22" viewBox="0 0 22 22">
          <GetIcon color={color} img={img} />
        </Icon>
        <Text
          fontWeight="500"
          fontSize="14px"
          lineHeight="16px"
          marginLeft="9px"
          color={color}
        >
          {title}
        </Text>
      </Flex>
      {display === true ? (
        hoverItem ? (
          hoverItem()
        ) : (
          <></>
        )
      ) : item ? (
        item()
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default SideBarItem;