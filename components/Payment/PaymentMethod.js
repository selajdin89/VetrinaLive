import { Badge, HStack, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import Card from "../../UI/Card";

const PaymentMethod = (props) => {
  const { icon, status, method } = props;
  const disabledStatus = status === "Disabled";
  return (
    <Card>
      <HStack justifyContent="space-between">
        {icon}
        <Badge
          bgColor={disabledStatus ? "gray.100" : "green.100"}
          _text={disabledStatus ? styles.disabledTextBadge : styles.textBadge}
        >
          {status}
        </Badge>
      </HStack>
      <Text fontWeight="600" fontSize="17px" color="text.primary" mt="47px">
        {method}
      </Text>
    </Card>
  );
};

export default PaymentMethod;

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
});
