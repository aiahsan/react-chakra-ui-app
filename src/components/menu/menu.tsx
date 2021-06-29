import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

  MenuDivider,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
interface Props{
  title:string,
}
const CSTMenu=(props:Props) => {
  const {title}=props;
  const [showIcon, setShowIcon] = React.useState(false);
  return (
    <Menu>
      <MenuButton
        as={Button}
        onMouseEnter={() => setShowIcon(true)}
        onMouseLeave={() => setShowIcon(false)}
        rightIcon={
          <Box
            position="relative"
            display={showIcon === false ? "none" : "block"}
            left="11px"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.6665 6.66666L7.99984 9.99999L11.3332 6.66666H4.6665Z"
                fill="#666666"
              />
            </svg>
          </Box>
        }
      
        _hover={{
          backgroundColor: "#EBEBEB!important",
        }}
        _active={{
          backgroundColor: "#EBEBEB!important",

        }}
        marginLeft="15px"
        color="#666666"
        lineHeight="14px"
        backgroundColor="transparent"
        borderRadius="0px"
        border="none"
        width="130px"
        height="22px"
        fontWeight="normal"
        fontSize="12px"
        textAlign="left"
        paddingLeft="10px"
        paddingTop="4px"
        paddingBottom="4px"
      >
        {title}
      </MenuButton>
      <MenuList
        borderRadius="0px"
        filter="drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.1))"
        minWidth="130px"
        
>
        <MenuItem>
          <Text variant="menu">
            <Text  variant="menu_span">4 Go</Text>- $0.05/Hr
          </Text>
        </MenuItem>
        <MenuItem>
          <Text variant="menu">
            <Text variant="menu_span">8 Go</Text>- $0.10/Hr
          </Text>
        </MenuItem>
        <MenuItem>
          <Text variant="menu">
            <Text  variant="menu_span">16 Go</Text>- $0.20/Hr
          </Text>
        </MenuItem>
        <MenuItem>
          <Text variant="menu">
            <Text  variant="menu_span">32 Go</Text>- $0.339/Hr
          </Text>
        </MenuItem>
        <MenuDivider borderColor="#D9D9D9" />
        <MenuItem>
          <Text variant="moreOption">
            More options
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CSTMenu;