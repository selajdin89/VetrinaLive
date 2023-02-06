import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./components/Authentication/SignUp";
import { NativeBaseProvider } from "native-base";
import SignIn from "./components/Authentication/SignIn";
import theme from "./components/Themes/theme";
import ResetPassword from "./components/Authentication/ResetPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useState } from "react";
import Payment from "./components/Payment/Payment";
import Orders from "./components/Orders/Orders";
import OrderInfo from "./components/Orders/OrderInfo";
import Subscription from "./components/Subcsription/Subcription";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <View style={styles.container}>
          {!isAuth && (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="SignIn">
                {(props) => <SignIn {...props} setIsAuth={setIsAuth} />}
              </Stack.Screen>
              <Stack.Screen name="ResetPassword" component={ResetPassword} />
            </Stack.Navigator>
          )}
          {isAuth && (
            <Drawer.Navigator>
              <Drawer.Screen name="Dashboard" component={Dashboard} />
              <Drawer.Screen name="Products" component={Products} />
              <Drawer.Screen name="Payment" component={Payment} />
              <Drawer.Screen name="Orders" component={Orders} />
              <Drawer.Screen name="Subscription" component={Subscription} />

              <Drawer.Screen
                name="Order Info"
                component={OrderInfo}
                options={{
                  headerShown: false,
                  drawerLabel: () => null,
                  drawerIcon: () => null,
                }}
              />
            </Drawer.Navigator>
          )}
        </View>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
