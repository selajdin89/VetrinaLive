import { Box, Button, Stack, Switch, Text } from "native-base";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import TablePagination from "./TablePagination";
import ProductsHeader from "./ProductsHeader";
import setLoading from "../HOC/setLoading";
import NewProduct from "./NewProduct";

const Products = ({ navigation }) => {
  const [tableData, setTableData] = React.useState([]);
  const [modal, setModal] = useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://vetrina-422be-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      );
      const responseData = await response.json();

      setTableData(responseData);
    };

    fetchData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <ProductsHeader />;
      },
    });
  }, [navigation]);

  const addProduct = (product) => {
    product.key = Math.random().toString();
    setTableData((currentProducts) => {
      return [product, ...currentProducts];
    });
    setModal(false);
  };

  return (
    <>
      {!modal && (
        <View>
          <Box p="14px" bg="#F8F9FB">
            <Stack width="100%" direction="row">
              <Stack mr="auto">
                <Text mt="16px" fontSize="13px" color="#546679">
                  Products (24/100)
                </Text>
                <Text mt="16px" fontSize="13px" color="#546679">
                  Products (24/100)
                </Text>
                <Switch
                  alignSelf="baseline"
                  mt="16px"
                  size="md"
                  colorScheme="#B6BEC6"
                />
              </Stack>
              <Stack alignSelf="center">
                <Button onPress={() => setModal(true)} bgColor="blue.primary">
                  <Ionicons name="add-sharp" size={24} color="white" />
                </Button>
              </Stack>
            </Stack>
            <Box width="100%" mb="24px" zIndex="100" style={styles.box}>
              <TablePagination tableData={tableData} />
            </Box>
          </Box>
        </View>
      )}
      {modal && <NewProduct setModal={setModal} addProduct={addProduct} />}
    </>
  );
};

export default setLoading(Products);

const styles = StyleSheet.create({
  box: {
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 10,
    zIndex: 10,
    elevation: 5,
  },
});
