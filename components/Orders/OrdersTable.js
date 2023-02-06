import { Feather } from "@expo/vector-icons";
import { Checkbox, FlatList, HStack, View } from "native-base";
import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { DataTable, Text } from "react-native-paper";
import ArowsIcon from "../../assets/Icons/ArowsIcon";
import ThreeDotsIcon from "../../assets/Icons/ThreeDotsIcon";
import { tableOrders } from "../../data/TableData";
import { orderStyles } from "../Themes/globalStyles";

const OrdersTable = ({ navigation }) => {
  return (
    <View style={orderStyles.container}>
      <DataTable>
        <DataTable.Header style={orderStyles.rows}>
          <DataTable.Title style={orderStyles.products}>
            <HStack>
              <Checkbox
                borderColor="rgba(10, 37, 64, 0.15)"
                width="24px"
                height="24px"
                bgColor="white"
                value="test"
                accessibilityLabel="This is a dummy checkbox"
              />
              <Feather name="hash" size={24} color="#233B53" />
              <ArowsIcon />
            </HStack>
          </DataTable.Title>
          <DataTable.Title style={orderStyles.price} numeric>
            <HStack alignItems="center">
              <Text style={orderStyles.textTitle}>Name</Text>
              <ArowsIcon />
            </HStack>
          </DataTable.Title>
          <View style={orderStyles.statusTitleView}>
            <DataTable.Title style={orderStyles.statusTitle} numeric>
              <HStack alignItems="center">
                <Text style={orderStyles.textTitle}>Stato</Text>
                <ArowsIcon />
              </HStack>
            </DataTable.Title>
          </View>

          <DataTable.Title style={orderStyles.cell} numeric></DataTable.Title>
        </DataTable.Header>

        <FlatList
          data={tableOrders}
          renderItem={({ item }) => (
            <DataTable.Row style={orderStyles.rows}>
              <DataTable.Cell style={orderStyles.products}>
                <HStack alignItems="center">
                  <Checkbox
                    borderColor="rgba(10, 37, 64, 0.15)"
                    width="24px"
                    height="24px"
                    bgColor="white"
                    value="test"
                    accessibilityLabel="This is a dummy checkbox"
                  />
                  <Text fontSize="14px" color="text.primary">
                    2222
                  </Text>
                </HStack>
              </DataTable.Cell>
              <DataTable.Cell style={orderStyles.price} numeric>
                {item.name}
              </DataTable.Cell>
              <TouchableOpacity
                onPress={() => navigation.navigate("Order Info", item)}
                style={orderStyles.statusView}
              >
                <DataTable.Cell
                  style={[
                    orderStyles.status,
                    item.status === "New"
                      ? orderStyles.blue
                      : item.status === "Cancelled"
                      ? orderStyles.red
                      : item.status === "In progress"
                      ? orderStyles.brown
                      : orderStyles.violet,
                  ]}
                >
                  <Text style={orderStyles.statusText}>{item.status}</Text>
                </DataTable.Cell>
              </TouchableOpacity>
              <DataTable.Cell style={orderStyles.cell} numeric>
                <ThreeDotsIcon />
              </DataTable.Cell>
            </DataTable.Row>
          )}
        />
      </DataTable>
    </View>
  );
};

export default OrdersTable;
