import { AntDesign, Feather } from "@expo/vector-icons";
import { Box, Stack, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import ToolIcon from "../../assets/Icons/ToolIcon";
import Card from "../../UI/Card";

const Visitors = () => {
  return (
    <Card>
      <Stack alignItems="center" direction="row">
        <Feather name="eye" size={24} color="#103B66" />
        <Text ml="26px" fontSize="22px" fontWeight="600" color="#103B66">
          Visitors
        </Text>
      </Stack>
      <Stack mt="24px" alignItems="center">
        <Text fontSize="34px" fontWeight="600" color="#103B66">
          0
        </Text>
        <Stack mt="26px" direction="row">
          <Text mr="29px" color="#21B8F9" fontSize="17px">
            Vuoi ricevere piu visite? Contattaci!
          </Text>
          <AntDesign name="arrowright" size={24} color="#21B8F9" />
        </Stack>
      </Stack>
    </Card>
  );
};

export default Visitors;
