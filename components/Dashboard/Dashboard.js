import { Box, Stack, Text } from "native-base";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import ExternalIcon from "../../assets/Icons/ExternalIcon";
import ToolIcon from "../../assets/Icons/ToolIcon";
import ConfigVitrina from "./ConfigVitrina";
import Visitors from "./Visitors";
import OrderBox from "./OrderBox";
import LatestNews from "./LatestNews";
import { ScrollView } from "react-native";
import Extensions from "./Extensions";
import Capterra from "./Capterra";
import Customer from "./Customer";
import Invite from "./Invite";
import { LinearGradient } from "expo-linear-gradient";
import setLoading from "../HOC/setLoading";

const NBBox = (props) => {
  return (
    <Box p="5" {...props}>
      {props.children}
    </Box>
  );
};

const Dashboard = ({ navigation }) => {
  return (
    <ScrollView>
      <Box width="100%">
        <LinearGradient colors={["#21B8F9", "rgba(33, 184, 249, 0.1)132.05%"]}>
          <Stack
            position="relative"
            height="240px"
            paddingX="16px"
            paddingY="32px"
          >
            <Text color="#fff" fontSize="38" fontWeight="600" mb="10px">
              Welcome Selajdin!
            </Text>
            <Stack direction="row">
              <Text mr="19px" fontSize="17px">
                app.vetrinalive.com/selajdin-store
              </Text>
              <Feather name="external-link" size={24} color="#fff" />
            </Stack>
          </Stack>
        </LinearGradient>
        <Box p="14px" bg="#F8F9FB">
          <ConfigVitrina />
          <Visitors />
          <OrderBox />
          <LatestNews />
          <Extensions />
          <Capterra />
          <Customer />
          <Invite />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default setLoading(Dashboard);
