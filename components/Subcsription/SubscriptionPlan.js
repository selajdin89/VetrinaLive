import { Badge, Box, Button, HStack, Stack, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import CashIcon from "../../assets/Icons/CashIcon";

import Card from "../../UI/Card";

const SubscriptionPlan = (props) => {
  const { platform, amount, price, discount } = props;

  return (
    <Box mb="16px" zIndex="100" style={styles.box}>
      <HStack alignItems="baseline" justifyContent="space-between">
        <Stack>
          <Text fontWeight="600" fontSize="20px" color="text.primary">
            {platform}
          </Text>
          {discount ? (
            <Text fontSize="12px" color="#00C48C">
              {discount}
            </Text>
          ) : (
            ""
          )}
        </Stack>
        <Text fontWeight="600" fontSize="15px" color="text.primary">
          {amount}
        </Text>
      </HStack>
      <HStack alignItems="baseline" justifyContent="space-between">
        <Text
          paddingY="8px"
          fontWeight="600"
          fontSize="17px"
          color="text.primary"
          mt="24px"
        >
          €{" "}
          <Text fontWeight="600" fontSize="28px" color="blue.primary">
            {price}
          </Text>
          /year
        </Text>
        <Button _text={{ fontWeight: "600" }} size="md" bgColor="blue.primary">
          Change Plan
        </Button>
      </HStack>
    </Box>
  );
};

export default SubscriptionPlan;

const styles = StyleSheet.create({
  textBadge: {
    color: "#00C48C",
    paddingY: "4px",
    paddingX: "18px",
    fontSize: "14px",
  },
  disabledTextBadge: {
    color: "#7D8A99",
    paddingY: "4px",
    paddingX: "18px",
    fontSize: "14px",
  },
  box: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: "white",
    borderRadius: 10,
    zIndex: 10,
    elevation: 4,
  },
});
