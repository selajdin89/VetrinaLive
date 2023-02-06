import { AntDesign } from "@expo/vector-icons";
import { Avatar, Box, Button, Stack, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import SupportIcon from "../../assets/Icons/SupportIcon";

import Card from "../../UI/Card";

const Customer = () => {
  return (
    <Card>
      <Stack alignItems="center" direction="row">
        <SupportIcon />
        <Text ml="26px" fontSize="22px" fontWeight="600" color="#103B66">
          Customer support
        </Text>
      </Stack>
      <Stack mt="24px" alignItems="center" direction="row">
        <Avatar
          bg="green.500"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        >
          AJ
        </Avatar>
        <Text ml="26px" fontSize="20px" color="#103B66">
          Simona is here to help you
        </Text>
      </Stack>
      <Button
        alignSelf="center"
        width="105px"
        bgColor="#21B8F9"
        mt="24px"
        size="lg"
        shadow={3}
      >
        Contact us
      </Button>
    </Card>
  );
};

export default Customer;

const styles = StyleSheet.create({
  box: {
    padding: 24,
    backgroundColor: "white",
    borderRadius: 10,
    zIndex: 10,
    elevation: 4,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
