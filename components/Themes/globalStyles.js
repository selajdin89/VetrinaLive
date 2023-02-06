import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    marginTop: 63,
    flex: 1,
    padding: 16,
  },
  formContainer: {
    padding: 18,
  },
  title: { textAlign: "center", fontSize: 28, color: "#103B66", marginTop: 32 },
  text: { textAlign: "center", fontSize: 18 },
  rule: {
    marginTop: 30,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ruleLine: {
    flex: 1,
    borderBottomColor: "#6C7C8C",
    borderBottomWidth: 1,
  },
  textOr: {
    marginHorizontal: 24,
    color: "#6C7C8C",
    fontWeight: "600",
    fontSize: 14,
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    fontSize: 14,
  },
  textError: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
});

export const productsStyles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
  },
  cell: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#E7E9EC",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  products: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#E7E9EC",
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  price: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#E7E9EC",
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export const capterraStyles = StyleSheet.create({
  box: {
    padding: 24,
    backgroundColor: "#103B66",
    borderRadius: 10,
    zIndex: 10,
    elevation: 4,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export const dashboardStyles = StyleSheet.create({
  box: {
    padding: 24,
    backgroundColor: "white",
    borderRadius: 10,
    zIndex: 10,
    elevation: 4,
  },
});

export const orderStyles = StyleSheet.create({
  container: {
    maxHeight: 600,
    width: "100%",
    backgroundColor: "#fff",
  },
  cell: {
    borderLeftWidth: 1,
    borderColor: "#E7E9EC",
    paddingVertical: 12,
    paddingLeft: 12,
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  products: {
    paddingVertical: 12,
    paddingRight: 12,
    borderRightWidth: 1,
    borderColor: "#E7E9EC",
    flex: 2.9,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  price: {
    padding: 11,
    borderRightWidth: 1,
    borderColor: "#E7E9EC",
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rows: {
    height: 60,
    display: "flex",
    borderWidth: 1,
    borderColor: "#E7E9EC",
  },
  status: {
    width: 76.2,
    maxWidth: 76,

    paddingHorizontal: 2,
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  statusView: { padding: 12 },
  statusTitle: {
    color: "#233B53",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  statusTitleView: {
    paddingHorizontal: 5.4,
  },
  statusText: { color: "#fff" },

  textTitle: {
    fontWeight: "600",
    fontSize: 17,
    color: "#233B53",
  },
  blue: {
    backgroundColor: "#21B8F9",
  },
  violet: {
    backgroundColor: "#BE52F2",
  },
  red: {
    backgroundColor: "#F33451",
  },
  brown: {
    backgroundColor: "#FFA26B",
  },
});
