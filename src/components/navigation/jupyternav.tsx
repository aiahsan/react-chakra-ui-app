import React from "react";
import TopBar from "./topBar";

import Modal from "../../components/modals/notebookmodal";

import {
  Box,
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
const Sidebar = () => {
  const [isOpen, setisOpen] = React.useState(false);
  return (
    <>
      
      <Box w="256px" bg="#FFFFFF" position="fixed" h="100%">
        <TopBar />

        <Box
          w="100%"
          height="1px"
          margin="0px 0px"
          border="1px solid #D9D9D9"
        ></Box>

        <Box>
          <Box>
            <Flex
              cursor="pointer"
              alignItems="center"
              margin="15px 16px 7px 9px"
            >
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                  fill="#375F9B"
                />
              </svg>

              <Text
                ml="20px"
                color="#375F9B"
                fontWeight="500"
                fontSize="20px"
                lineHeight="23px"
              >
                JupyterLabs
              </Text>
            </Flex>
            <Box ml="15px" mr="15px" mt="15px">
              <InputGroup backgroundColor="#F8F8F8" borderColor="#F8F8F8">
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2264 9.08333H9.60324L9.38237 8.86958C10.1554 7.96708 10.6208 6.79542 10.6208 5.52083C10.6208 2.67875 8.32536 0.375 5.49351 0.375C2.66166 0.375 0.366211 2.67875 0.366211 5.52083C0.366211 8.36292 2.66166 10.6667 5.49351 10.6667C6.7635 10.6667 7.93095 10.1996 8.8302 9.42375L9.04318 9.64542V10.2708L12.9873 14.2213L14.1626 13.0417L10.2264 9.08333ZM5.49351 9.08333C3.52936 9.08333 1.94384 7.49208 1.94384 5.52083C1.94384 3.54958 3.52936 1.95833 5.49351 1.95833C7.45766 1.95833 9.04318 3.54958 9.04318 5.52083C9.04318 7.49208 7.45766 9.08333 5.49351 9.08333Z"
                        fill="#666666"
                      />
                    </svg>
                  }
                />
                <Input
                  type="text"
                  _placeholder={{
                    color: "#666666",
                    fontSize: "12px",
                    lineHeight: "14px",
                  }}
                  placeholder="Search a JupyterLab"
                />
              </InputGroup>
            </Box>
          </Box>
          <Box pos="absolute" bottom="0px" mb="20px" ml="20px" mr="20px">
            <Button
              onClick={() => setisOpen(true)}
              color="#2E54A2"
              fontWeight="500"
              lineHeight="18px"
              fontSize="12px"
              backgroundColor="#EBF3FF"
              w="215px"
              height="34px"
              borderRadius="2px"
            >
              + CREATE A NOTEBOOK
            </Button>
          </Box>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={() => setisOpen(false)} />
    </>
  );
};
export default Sidebar;
