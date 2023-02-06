import {
  Badge,
  Box,
  Button,
  FlatList,
  HStack,
  Stack,
  Switch,
  Text,
} from "native-base";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import PaymentMethod from "./PaymentMethod";
import { payments } from "../../data/PaymentData";
import setLoading from "../HOC/setLoading";

const Payment = ({ navigation }) => {
  return (
    <View>
      <Box paddingX="14px" paddingY="48px" bg="#F8F9FB">
        <FlatList
          data={payments}
          renderItem={({ item }) => (
            <PaymentMethod
              icon={item.icon}
              status={item.status}
              method={item.method}
            />
          )}
          ListHeaderComponent={
            <Stack mb="24px" width="100%">
              <Text fontWeight="600" fontSize="22px" color="#103B66">
                Payment methods
              </Text>
            </Stack>
          }
        />
      </Box>
    </View>
  );
};

export default setLoading(Payment);
