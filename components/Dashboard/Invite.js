import { AntDesign, Feather } from "@expo/vector-icons";
import { Box, Stack, Text } from "native-base";
import React from "react";
import Card from "../../UI/Card";

const Invite = () => {
  return (
    <Card>
      <Stack alignItems="center" direction="row">
        <Feather name="users" size={24} color="#103B66" />
        <Text ml="26px" fontSize="22px" fontWeight="600" color="#103B66">
          Invite a friend
        </Text>
      </Stack>
      <Stack width="100%" paddingY="24px" alignItems="center">
        <Text color="#103B66" fontSize="18px">
          <Text color="#00C48C" bold>
            Receive 50 products
          </Text>{" "}
          by inviting friend who subscribes to a plan. Your friend will receive
          a 30% dicount coupon valid for any plan.{" "}
        </Text>
        <Stack
          width="100%"
          justifyContent="space-between"
          mt="26px"
          direction="row"
        >
          <Text
            mr="auto"
            textDecorationLine="underline"
            color="#21B8F9"
            fontSize="17px"
          >
            Start inviting friends!
          </Text>
          <AntDesign name="arrowright" size={24} color="#21B8F9" />
        </Stack>
      </Stack>
    </Card>
  );
};

export default Invite;
