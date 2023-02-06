import { AntDesign } from "@expo/vector-icons";
import { Box, Center, Stack, Text } from "native-base";
import React from "react";
import ProductsIcon from "../../assets/Icons/ProductsIcon";
import WorlddIcon from "../../assets/Icons/WorldIcon";
import Card from "../../UI/Card";
import ExtensionIcon from "./../../assets/Icons/ExtensionIcon";

const Extensions = () => {
  return (
    <Card>
      <Stack alignItems="center" direction="row">
        <ExtensionIcon />
        <Text ml="26px" fontSize="22px" fontWeight="600" color="#103B66">
          Extensions Marketplace
        </Text>
      </Stack>
      <Stack mt="24px" alignItems="center">
        <Stack overflow="hidden" width="100%" maxWidth="100%" direction="row">
          <Stack>
            <Center mr="24px" p="52px" bgColor="#FFA26B" borderRadius="10px">
              <WorlddIcon />
            </Center>
            <Text mt="12.5px" fontSize="16px" color="#103B66">
              Custom Domain
            </Text>
          </Stack>
          <Stack>
            <Center p="52px" bgColor="#00C48C" borderRadius="10px">
              <ProductsIcon />
            </Center>
            <Text mt="12.5px" fontSize="16px" color="#103B66">
              + 50 Products
            </Text>
          </Stack>
        </Stack>
        <Stack width="100%" direction="row">
          <Stack
            justifyContent="space-between"
            width="100%"
            mt="26px"
            direction="row"
          >
            <Text
              textDecorationLine="underline"
              mr="29px"
              color="#21B8F9"
              fontSize="17px"
            >
              Discover all extensions
            </Text>
            <Box mr="28px">
              <AntDesign name="arrowright" size={24} color="#21B8F9" />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Extensions;
