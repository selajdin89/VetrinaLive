import { Box, Stack, Text } from "native-base";
import React from "react";
import FilterIcon from "../../assets/Icons/FilterIcon";
import SearchIcon from "../../assets/Icons/SearchIcon";

const ProductsHeader = () => {
  return (
    <Stack direction="row" mr="21">
      <Box mr="34px">
        <SearchIcon />
      </Box>
      <FilterIcon />
    </Stack>
  );
};

export default ProductsHeader;
