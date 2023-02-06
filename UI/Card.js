import { Box } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <Box bg="#F8F9FB">
      <Box mb="24px" zIndex="100" style={styles.box}>
        {props.children}
      </Box>
    </Box>
  );
};

export default Card;

const styles = StyleSheet.create({
  box: {
    padding: 24,
    backgroundColor: "white",
    borderRadius: 10,
    zIndex: 10,
    elevation: 4,
  },
});
