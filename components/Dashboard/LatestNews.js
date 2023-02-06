import { AntDesign } from "@expo/vector-icons";
import { AspectRatio, Box, Stack, Text } from "native-base";
import React from "react";
import { Image, StyleSheet } from "react-native";
import ExternalIcon from "../../assets/Icons/ExternalIcon";
import NewsIcon from "../../assets/Icons/NewsIcon";
import Card from "../../UI/Card";

const LatestNews = () => {
  return (
    <Card>
      <Stack alignItems="center" direction="row">
        <NewsIcon />
        <Text ml="26px" fontSize="22px" fontWeight="600" color="#103B66">
          Latest news
        </Text>
      </Stack>
      <Stack mt="24px" alignItems="center">
        <Stack
          mb="27px"
          bgColor="#fff"
          style={{ elevation: 3 }}
          overflow="hidden"
          borderRadius="10px"
          width="100%"
          direction="row"
        >
          <Box maxH="113px" flex={1}>
            <Image
              source={require("../../assets/images/first-image.jpg")}
              alt="Alternate Text"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
          <Stack padding="16px" flex={2}>
            <Text fontSize="12px" color="#21B8F9">
              E-COMMERCE TIPS
            </Text>
            <Text fontSize="15px" fontWeight="600" color="#103B66">
              13 tips on How to Write a Business Plan with success
            </Text>
            <Text fontSize="12px" fontWeight="600" color="#7D8A99">
              Stime lettura 5min
            </Text>
          </Stack>
        </Stack>
        <Stack
          mb="27px"
          bgColor="#fff"
          style={{ elevation: 3 }}
          overflow="hidden"
          borderRadius="10px"
          width="100%"
          direction="row"
        >
          <Box maxH="113px" flex={1}>
            <Image
              source={require("../../assets/images/second-image.jpg")}
              alt="Alternate Text"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
          <Stack padding="16px" flex={2}>
            <Text fontSize="12px" color="#21B8F9">
              E-COMMERCE TIPS
            </Text>
            <Text fontSize="15px" fontWeight="600" color="#103B66">
              13 tips on How to Write a Business Plan with success
            </Text>
            <Text fontSize="12px" fontWeight="600" color="#7D8A99">
              Stime lettura 5min
            </Text>
          </Stack>
        </Stack>
        <Stack
          bgColor="#fff"
          style={styles.boxes}
          overflow="hidden"
          borderRadius="10px"
          width="100%"
          direction="row"
        >
          <Box maxH="113px" flex={1}>
            <Image
              source={require("../../assets/images/third-image.jpg")}
              alt="Alternate Text"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
          <Stack padding="16px" flex={2}>
            <Text fontSize="12px" color="#21B8F9">
              E-COMMERCE TIPS
            </Text>
            <Text fontSize="15px" fontWeight="600" color="#103B66">
              13 tips on How to Write a Business Plan with success
            </Text>
            <Text fontSize="12px" fontWeight="600" color="#7D8A99">
              Stime lettura 5min
            </Text>
          </Stack>
        </Stack>
        <Stack width="100%" direction="row"></Stack>
        <Stack mt="26px" direction="row">
          <Text mr="29px" color="#21B8F9" fontSize="17px">
            Visita il nostro Blog
          </Text>
          <ExternalIcon />
        </Stack>
      </Stack>
    </Card>
  );
};

export default LatestNews;

const styles = StyleSheet.create({
  boxes: {
    elevation: 3,
  },
});
