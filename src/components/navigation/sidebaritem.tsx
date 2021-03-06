import React from "react";
import {  Icon, Flex, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  img: number;
  onClick:()=>void
}
interface IconProps {
  img: number;
  color: String;
}
const GetIcon = (props: IconProps) => {
  const { img,color } = props;
  switch (img) {
    case 1: {
      return (
        <>
          <g clipPath="url(#clip0)">
            
            <path
              d="M5.69303 11.5267V8.02665H8.02637V11.5267H10.943V6.85999H12.693L6.8597 1.60999L1.02637 6.85999H2.77637V11.5267H5.69303Z"
              fill={color}
            />
          </g>
          <defs>
            
            <clipPath id="clip0">
              
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </>
      );
    }
    case 2: {
      return (
        <>
          <rect
            x="1.03076"
            y="4.51819"
            width="4.46727"
            height="4.46727"
            rx="1"
            fill={color}
          />
          <rect
            x="8.47607"
            y="1.54004"
            width="4.46728"
            height="4.46727"
            rx="1"
            fill={color}
          />
          <rect
            width="4.46728"
            height="4.46727"
            rx="1"
            transform="matrix(1 0 0 -1 8.47607 12.4601)"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.4691 3.52546L5.00182 7.49637L4.34229 6.75439L8.80956 2.78349L9.4691 3.52546Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.4691 10.4745L5.00182 6.50363L4.34229 7.24561L8.80956 11.2165L9.4691 10.4745Z"
            fill={color}
          />
        </>
      );
    }
    case 3: {
      return (
        <>
          <path
            d="M6.56807 10.3815C4.14869 10.3815 2.03575 9.49492 0.938965 8.18274C1.34745 9.36018 2.10875 10.3804 3.11749 11.1023C4.12625 11.8242 5.33253 12.2119 6.56942 12.2119C7.80631 12.2119 9.0126 11.8242 10.0214 11.1023C11.0301 10.3804 11.7914 9.36018 12.1999 8.18274C11.1004 9.49492 8.98748 10.3815 6.56807 10.3815Z"
            fill={color}
          />
          <path
            d="M6.56782 1.84598C8.98724 1.84598 11.1002 2.73252 12.197 4.04469C11.7885 2.86726 11.0272 1.847 10.0184 1.12514C9.00967 0.403271 7.80339 0.0155029 6.5665 0.0155029C5.32961 0.0155029 4.12332 0.403271 3.11456 1.12514C2.10582 1.847 1.34452 2.86726 0.936035 4.04469C2.03551 2.73523 4.14844 1.84598 6.56782 1.84598Z"
            fill={color}
          />
        </>
      );
    }
    case 4: {
      return (
        <>
          <path
            d="M3.91741 9.6353C3.91741 10.0235 3.59976 10.3765 3.17623 10.3765C2.75271 10.3765 2.43506 10.0588 2.43506 9.6353V6.45883C2.43506 6.07059 2.75271 5.71765 3.17623 5.71765C3.59976 5.71765 3.91741 6.0353 3.91741 6.45883V9.6353Z"
            fill={color}
          />
          <path
            d="M6.03544 10.4824C6.03544 10.8706 5.71779 11.2235 5.29426 11.2235C4.87073 11.2235 4.58838 10.9059 4.58838 10.4824V5.64706C4.58838 5.25883 4.90603 4.90588 5.32956 4.90588C5.75309 4.90588 6.07073 5.22353 6.07073 5.64706V10.4824H6.03544Z"
            fill={color}
          />
          <path
            d="M1.76458 8.92933C1.76458 9.31756 1.44693 9.6705 1.0234 9.6705C0.599874 9.6705 0.282227 9.35286 0.282227 8.92933V7.19992C0.282227 6.81168 0.599874 6.45874 1.0234 6.45874C1.44693 6.45874 1.76458 6.81168 1.76458 7.19992V8.92933Z"
            fill={color}
          />
          <path
            d="M8.15263 11.2588C8.15263 11.6471 7.83498 12 7.41145 12C7.02321 12 6.70557 11.6471 6.70557 11.2588V4.83529C6.70557 4.44706 7.02321 4.09412 7.44674 4.09412C7.83498 4.09412 8.18792 4.41176 8.18792 4.83529V11.2588H8.15263Z"
            fill={color}
          />
          <path
            d="M10.4822 10.9411C10.341 10.9411 10.2351 10.9058 10.0939 10.8705L9.21159 10.5882C9.07041 10.5529 8.96453 10.3764 9.03512 10.2353C9.07041 10.0941 9.24688 9.98819 9.38806 10.0588L10.3057 10.3411C10.4822 10.4117 10.6939 10.3764 10.8704 10.2353C11.0469 10.1294 11.1175 9.91761 11.1175 9.74113V3.84702C11.1175 3.56466 10.941 3.3176 10.6939 3.24702L2.04688 0.635251C1.87041 0.564663 1.65865 0.599957 1.48217 0.70584C1.341 0.847016 1.23512 1.02349 1.23512 1.23525V5.29408C1.23512 5.47055 1.09394 5.57643 0.952763 5.57643C0.776293 5.57643 0.67041 5.43525 0.67041 5.29408V1.23525C0.67041 0.847016 0.846881 0.494075 1.16453 0.28231C1.48217 0.0352514 1.87041 -4.27552e-05 2.22335 0.10584L10.8351 2.7176C11.3292 2.85878 11.6822 3.3529 11.6822 3.88231V9.77643C11.6822 10.1647 11.5057 10.5176 11.1881 10.7647C10.9763 10.8353 10.7292 10.9411 10.4822 10.9411Z"
            fill={color}
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
  const { img, title ,onClick} = props;
  const [color, setColor] = React.useState("black");
  
  return (
    <Flex
    onClick={()=>onClick()}
      height="36px"
      padding="10px 15px"
      _hover={{
        backgroundColor: "rgb(235, 243, 255)",
        color: "rgb(235, 243, 255)",
        cursor: "pointer",
      }}
      onMouseEnter={() => setColor("#597bae")}
      onMouseLeave={() => setColor("black")}
    >
      <Icon viewBox="0 0 14 14" fill={color}>
        <GetIcon color={color} img={img} />
      </Icon>
      <Text
        fontWeight="500"
        fontSize="14px"
        lineHeight="16px"
        marginLeft="9px"
        style={{ color: color }}
      >
        {title}
      </Text>
    </Flex>
  );
};

export default SideBarItem;