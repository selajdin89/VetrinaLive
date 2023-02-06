import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Button,
  HStack,
  ScrollView,
  Stack,
  Text,
  View,
} from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

const OrderInfo = ({ route, navigation }) => {
  const item = route.params;
  const isCancelled = item.status === "Cancelled";
  const isNew = item.status === "New";
  const isInProgress = item.status === "In progress";
  return (
    <ScrollView>
      <View padding="24px" mt="42px" bgColor="#fff">
        <HStack
          py="25px"
          borderBottomColor="#E7E9EC"
          borderBottomWidth="1"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="17px" color="text.primary">
            Orders: #1292
          </Text>
          <HStack>
            <MaterialIcons name="stars" size={24} color="#21B8F9" />
            <Text ml="10px" mr="29px" fontSize="15px" color="blue.primary">
              Stampa ordine
            </Text>

            <AntDesign
              onPress={() => navigation.navigate("Orders")}
              name="close"
              size={24}
              color="black"
            />
          </HStack>
        </HStack>
        <HStack mt="12px" justifyContent="space-between">
          <Text
            paddingY="12px"
            paddingX="32px"
            borderBottomWidth="3"
            borderBottomColor="blue.primary"
            fontSize="12px"
            fontWeight="600"
            color="blue.primary"
          >
            Info orders
          </Text>
          <Text
            paddingY="12px"
            paddingX="32px"
            fontSize="12px"
            fontWeight="600"
            color="text.primary"
          >
            Prducts
          </Text>
          <Text
            paddingY="12px"
            paddingX="32px"
            fontSize="12px"
            fontWeight="600"
            color="text.primary"
          >
            Shipping
          </Text>
        </HStack>
        <Stack
          borderBottomWidth="1"
          borderBottomColor="#E7E9EC"
          pb="28px"
          space={4}
          mt="24px"
        >
          <Text color="#546679">29/05/2020 18:54</Text>
          <Text fontSize="17px" color="#546679">
            Cliente
          </Text>
          <Text fontSize="15px" color="text.primary">
            {item.name}
          </Text>
          <Text fontSize="15px" color="text.primary">
            {item.email}
          </Text>
          <Text fontSize="15px" color="text.primary">
            Telefono:{" "}
            <Text fontSize="15px" color="blue.primary">
              {item.telNumber}
            </Text>
          </Text>
          <Text color="text.primary" fontSize="12px">
            Codice Fiscale: RSSMAR22T33M123K
          </Text>
          <HStack>
            <FontAwesome name="whatsapp" size={24} color="#00C48C" />
            <Text ml="16px" fontSize="15px" color="#00C48C">
              Contatta so Whatsapp
            </Text>
          </HStack>
          <HStack>
            <FontAwesome5 name="telegram" size={24} color="#21B8F9" />
            <Text ml="16px" fontSize="15px" color="blue.primary">
              Contatta so Telegram
            </Text>
          </HStack>
        </Stack>
        <Stack
          pb="16px"
          borderBottomWidth="1"
          borderBottomColor="#E7E9EC"
          space={4}
          mt="24px"
        >
          <Text fontWeight="500" fontSize="18px" color="#546679">
            Shipping Adress
          </Text>
          <Text color="text.primary">{item.shippingAdress}</Text>
        </Stack>
        <Stack space={4} mt="24px">
          <Text fontWeight="600" fontSize="17px" color="#546679">
            Shipping Info
          </Text>
          <Text fontSize="15px" color="text.primary">
            Nome corriere: {item.postName}
          </Text>
          <Text fontSize="15px" color="text.primary">
            Numero/Link ordine: {item.orderNumber}
          </Text>
          <HStack mt="14px">
            <Feather name="info" size={24} color="#103B66" />
            <Text marginX="14px" fontSize="15px" color="text.primary">
              Spedizione Corriere
            </Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="#103B66"
            />
          </HStack>
          <Text fontSize="13px" color="#7D8A99">
            Se cambi la modalita e i costi di consegna. ricordati..
          </Text>
        </Stack>
        <Stack space={5} mt="24px" pt="71px" pb="10px">
          <HStack justifyContent="space-between">
            <Text fontSize="17px" color="text.primary">
              Subtotal
            </Text>
            <Text fontSize="17px" color="text.primary">
              € {item.subTotal},00
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontSize="17px" color="text.primary">
              Courier Shipping
            </Text>
            <HStack>
              <Text fontSize="17px" color="text.primary">
                € {item.shippingCost},00{" "}
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="#103B66"
              />
            </HStack>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontWeight="600" fontSize="17px" color="text.primary">
              Total
            </Text>
            <Text fontWeight="600" fontSize="17px" color="text.primary">
              € {item.subTotal + item.shippingCost},00
            </Text>
          </HStack>
          <Button
            p="24px"
            mt="14px"
            _text={styles.button}
            rightIcon={
              <MaterialIcons
                name="keyboard-arrow-down"
                size={26}
                color="#ffffff"
              />
            }
            size="lg"
            bgColor={
              isCancelled
                ? "#F33451"
                : isInProgress
                ? "#FFA26B"
                : isNew
                ? "#21B8F9"
                : "#6979F8"
            }
          >
            {item.status}
          </Button>
        </Stack>
      </View>
    </ScrollView>
  );
};

export default OrderInfo;

const styles = StyleSheet.create({
  button: {
    fontSize: "18px",
  },
});
