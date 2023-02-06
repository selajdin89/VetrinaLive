import { AntDesign } from "@expo/vector-icons";
import { Box, Stack, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import ToolIcon from "../../assets/Icons/ToolIcon";

const ConfigVitrina = () => {
  return (
    <Box mt="-100px" mb="24px" zIndex="100" style={styles.box}>
      <Stack alignItems="center" direction="row">
        <ToolIcon />
        <Text ml="26px" fontSize="22px" fontWeight="600" color="#103B66">
          Configura la tua Vetrina
        </Text>
      </Stack>
      <Stack mt="24px" alignItems="center">
        <Text fontSize="34px" fontWeight="600" color="#f33451">
          0%
        </Text>
        <Text fontSize="34px" fontWeight="600" color="#f33451">
          completato
        </Text>
        <Text mt="24px" fontSize="20px" color="#7D8A99" textAlign="center">
          Completa tutti i step ricevere maggiore visibilita e una vetrina
          accativante
        </Text>
        <Stack mt="26px" direction="row">
          <Text mr="29px" color="#21B8F9" fontSize="17px">
            Completa la configurazione
          </Text>
          <AntDesign name="arrowright" size={24} color="#21B8F9" />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ConfigVitrina;

const styles = StyleSheet.create({
  box: {
    padding: 24,
    backgroundColor: "white",
    borderRadius: 10,
    zIndex: 10,
    elevation: 4,
  },
});
