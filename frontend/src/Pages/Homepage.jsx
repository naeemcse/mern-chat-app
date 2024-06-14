import React, {useEffect} from 'react';
import {Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text} from "@chakra-ui/react";
import Login from "../components/authentication/Login.jsx";
import Signup from "../components/authentication/Signup.jsx";
import { useNavigate  } from "react-router-dom";
const Homepage = () => {

    const navigate  = useNavigate ();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (user) navigate("/chats");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container maxW="xl" centerContent>
            <Box
                d="flex"
                justifyContent="center"
                p={3}
                bg={"white"}
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
                textAlign="center"
            >
                <Text
                    fontSize="4xl"
                    fontFamily="Work Sans"
                    color="black"
                >
                    Talk-To-Show
                </Text>
            </Box>

            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
                <Tabs isFitted variant="soft-rounded">
                    <TabList mb="1em">
                        <Tab>Login</Tab>
                        <Tab>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login/>
                        </TabPanel>
                        <TabPanel>
                            <Signup/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </Container>
    );
};

export default Homepage;