import { AntDesign } from "@expo/vector-icons";
import { Box, Stack, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import CapterraIcon from "../../assets/Icons/CapterraIcon";
import { capterraStyles } from "../Themes/globalStyles";

const Capterra = () => {
  return (
    <Box mb="24px" zIndex="100" style={capterraStyles.box}>
      <CapterraIcon />
      <Stack
        borderBottomColor="#ffffff"
        borderBottomWidth="1px"
        paddingY="24px"
        alignItems="center"
      >
        <Text fontSize="18px">
          Write a{" "}
          <Text color="#00C48C" bold>
            positive
          </Text>{" "}
          review on Capterra and receive the extension with{" "}
          <Text bold>50 additional products</Text>
        </Text>
        <Stack mt="26px" direction="row">
          <Text
            textDecorationLine="underline"
            mr="29px"
            color="#00C48C"
            fontSize="17px"
          >
            10 free tips to increase your sales
          </Text>
          <AntDesign name="arrowright" size={24} color="#00C48C" />
        </Stack>
      </Stack>
      <Stack mt="24px" alignItems="center">
        <Text fontSize="18px">
          Write a{" "}
          <Text color="#00C48C" bold>
            positive
          </Text>{" "}
          review on Capterra and receive the extension with{" "}
          <Text bold>50 additional products</Text>
        </Text>
        <Stack mt="26px" direction="row">
          <Text
            textDecorationLine="underline"
            mr="29px"
            color="#00C48C"
            fontSize="17px"
          >
            10 free tips to increase your sales
          </Text>
          <AntDesign name="arrowright" size={24} color="#00C48C" />
        </Stack>
        <Text width="100%" fontSize="12px" mt="24px">
          *The two promotions are cumulative
        </Text>
      </Stack>
    </Box>
  );
};

export default Capterra;
