import React from "react";
import MenuButton from "../../components/menu/menu";
import {
    Flex,
    Text,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    Button,
    Input,
    
} from "@chakra-ui/react";
import Notebookbar from "../notebook/notebookbar";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}
const NoteBookModal=(props: Props) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent width="100%" maxWidth=" 601px">
                <Box w="100%" h="609px" maxW="601px" padding="22px 30px 0px 30px">
                    <Flex cursor="pointer" alignItems="center" padding="0px 0px 31px 0px">
                        <svg
                            onClick={props.onClose}
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
                    <Input
                           boxShadow="none"
                           border="0px"
                           borderBottom="1px solid #ADADAD"
                           borderRadius="0px"
                           color="#333333"
                           fontWeight="500"
                           width="271px"
                           fontSize="16px"
                           lineHeight="19px"
                           height="30px"
                           paddingBottom="15px"
                           _placeholder={{
                            color: "#ADADAD",
                            lineHeight: "19px",
                            fontSize: "15px",
                            fontWeight: "500",
                          }}
                           _active={{
                            boxShadow: "none",
                            borderColor: "#ADADAD",
                          }}
                           _focus={{
                            boxShadow: "none",
                            borderColor: "#ADADAD",
                          }}
                        placeholder="Notebook Title"
                    />
                    <Flex marginTop="31px" alignItems="center">
                        <Box>
                            <svg
                                width="8"
                                height="14"
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.25008 13.75H2.50008L3.25008 8.5H0.625085C0.190085 8.5 0.197585 8.26 0.340085 8.005C0.482585 7.75 0.377585 7.945 0.392585 7.915C1.36009 6.205 2.81508 3.655 4.75008 0.25H5.50008L4.75008 5.5H7.37508C7.74258 5.5 7.79508 5.7475 7.72758 5.8825L7.67508 5.995C4.72008 11.1625 3.25008 13.75 3.25008 13.75Z"
                                    fill="#666666"
                                />
                            </svg>
                        </Box>
                        <MenuButton title="16 Go - $0.20/Hour" />
                    </Flex>
                    <Flex marginTop="21px" alignItems="center">
                        <Box>
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
                        </Box>
                        <Flex
                            width="328.33px"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Box>

                                <Text

                                    variant="moreOption"
                                    marginLeft="19px"
                                    color="#666666"
                                >
                                    Lun-Ven 07:00-20:00
                                </Text>
                                <Text

                                    fontWeight="normal"
                                    fontSize="10px"
                                    lineHeight="12px"
                                    marginLeft="19px"
                                    marginTop="4.67px"
                                    color="#ADADAD"

                                >
                                    You will be able to update startup and shuttdown time anytime.
                                </Text>
                            </Box>
                            <Button variant="crossButton">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.08317 1.73913L8.26067 0.916626L4.99984 4.17746L1.739 0.916626L0.916504 1.73913L4.17734 4.99996L0.916504 8.26079L1.739 9.08329L4.99984 5.82246L8.26067 9.08329L9.08317 8.26079L5.82234 4.99996L9.08317 1.73913Z" fill="#666666" />
                                </svg>

                            </Button>
                        </Flex>
                    </Flex>
                    <Box >
                    <Notebookbar isOff={false} day="Monday"/>
                    <Notebookbar isOff={false} day="Tuesday"/>
                    <Notebookbar isOff={false} day="Wednesday"/>
                    <Notebookbar isOff={false} day="Thursday"/>
                    <Notebookbar isOff={false} day="Friday"/>
                    <Notebookbar isOff={true} day="Saturday"/>
                    <Notebookbar isOff={true} day="Sunday"/>

                    </Box>
                    <Flex
                        marginTop="45px"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Box>
                            <Text
                                fontWeight="500"
                                fontSize="12px"
                                lineHeight="28px"
                                color="#ADADAD"
                            >
                                Estimated Price
                            </Text>
                            <Text
                                color="#375F9B"
                                fontWeight="500"
                                fontSize="24px"
                                lineHeight="28px"
                            >
                                52€<span style={{ fontSize: "12px" }}>/month</span>
                            </Text>
                        </Box>
                        <Box>
                            <Button
                                variant="priceButton"
                                width="101px"

                            >
                                CREATE
                                <svg
                                    style={{ marginLeft: 5 }}
                                    width="15"
                                    height="8"
                                    viewBox="0 0 15 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.76234 3.99998C1.76234 2.78873 2.74692 1.80415 3.95817 1.80415L6.7915 1.80415V0.458313L3.95817 0.458313C2.00317 0.458313 0.416504 2.04498 0.416504 3.99998C0.416504 5.95498 2.00317 7.54164 3.95817 7.54164L6.7915 7.54164L6.7915 6.19581L3.95817 6.19581C2.74692 6.19581 1.76234 5.21123 1.76234 3.99998ZM4.6665 4.70831L10.3332 4.70831V3.29165L4.6665 3.29165L4.6665 4.70831ZM11.0415 0.458313L8.20817 0.458313V1.80415L11.0415 1.80415C12.2528 1.80415 13.2373 2.78873 13.2373 3.99998C13.2373 5.21123 12.2528 6.19581 11.0415 6.19581L8.20817 6.19581L8.20817 7.54164L11.0415 7.54164C12.9965 7.54164 14.5832 5.95498 14.5832 3.99998C14.5832 2.04498 12.9965 0.458313 11.0415 0.458313Z"
                                        fill="white"
                                    />
                                </svg>
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </ModalContent>
        </Modal>
    );
};

export default NoteBookModal;