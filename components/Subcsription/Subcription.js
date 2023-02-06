import { Badge, Box, FlatList, HStack, Stack, Switch, Text } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import { subscription } from "../../data/Subs";
import SubscriptionPlan from "./SubscriptionPlan";

const Subscription = ({ navigation }) => {
  return (
    <View>
      <Box paddingX="16px" paddingY="48px" bg="#F8F9FB">
        <FlatList
          data={subscription}
          renderItem={({ item }) => (
            <SubscriptionPlan
              platform={item.platform}
              amount={item.amount}
              price={item.price}
              discount={item.discount}
            />
          )}
          ListHeaderComponent={
            <Stack mb="24px" width="100%">
              <Text
                textAlign="center"
                fontWeight="600"
                fontSize="22px"
                color="#103B66"
              >
                Choose your plan
              </Text>
              <HStack
                mt="24px"
                space={6}
                alignItems="center"
                justifyContent="flex-end"
              >
                <Text bold fontSize="17px" color="#7D8A99">
                  Monthly
                </Text>
                <Switch
                  size="md"
                  onTrackColor="blue.primary"
                  offTrackColor="#B6BEC6"
                />
                <HStack>
                  <Text bold fontSize="17px" color="text.primary">
                    Yearly
                  </Text>
                  <Badge
                    ml="12px"
                    borderRadius="5px"
                    _text={styles.badge}
                    bgColor="#00C48C"
                  >
                    Promo
                  </Badge>
                </HStack>
              </HStack>
            </Stack>
          }
        />
      </Box>
    </View>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  badge: {
    fontSize: "12px",
    color: "white",
  },
});
