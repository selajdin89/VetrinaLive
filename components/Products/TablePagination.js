import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "native-base";
import * as React from "react";
import { DataTable } from "react-native-paper";
import ThreeDotsIcon from "../../assets/Icons/ThreeDotsIcon";
import { productsStyles } from "../Themes/globalStyles";

const optionsPerPage = [3, 4, 5];

const TablePagination = ({ tableData }) => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(7);

  const productIcon = <Ionicons name="shirt-outline" size={24} color="black" />;

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, tableData.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return tableData.length === 0 ? null : (
    <DataTable style={productsStyles.container}>
      <DataTable.Header>
        <DataTable.Title style={productsStyles.products}>
          Product name
        </DataTable.Title>
        <DataTable.Title style={productsStyles.price} numeric>
          Price
        </DataTable.Title>
        <DataTable.Title style={productsStyles.cell} numeric>
          <ThreeDotsIcon />
        </DataTable.Title>
      </DataTable.Header>

      <FlatList
        data={
          page === 0
            ? tableData.slice(0, itemsPerPage)
            : tableData.slice(
                page * itemsPerPage,
                page * itemsPerPage + itemsPerPage
              )
        }
        renderItem={({ item }) => (
          <DataTable.Row>
            <DataTable.Cell style={productsStyles.products}>
              {productIcon}
              {item.name}
            </DataTable.Cell>
            <DataTable.Cell style={productsStyles.price} numeric>
              {item.price}
            </DataTable.Cell>
            <DataTable.Cell style={productsStyles.cell} numeric>
              <ThreeDotsIcon />
            </DataTable.Cell>
          </DataTable.Row>
        )}
      />

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(tableData.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${tableData.length}`}
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={"Rows per page"}
      />
    </DataTable>
  );
};

export default TablePagination;
