import { Button, Input, ScrollView, Stack } from "native-base";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Text as TextNative } from "native-base";
import ButtonComponent from "../../UI/Button";
import Logo from "../../assets/Icons/Logo";
import GoogleIcon from "../../assets/Icons/GoogleIcon";
import FacebookIcon from "../../assets/Icons/FacebookIcon";
import SupportIcon from "../../assets/Icons/SupportIcon";
import { globalStyles } from "../Themes/globalStyles";
import { Formik } from "formik";
import * as yup from "yup";
import setLoading from "../HOC/setLoading";

const ReviewSchema = yup.object({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required().min(7, "Pasword is incorrect"),
});

const initialValues = {
  email: "",
  password: "",
};

const SignIn = ({ setIsAuth, navigation }) => {
  const pressHandler = () => {
    setIsAuth(true);
  };
  const title = "Login";
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View style={{ alignItems: "center" }}>
          <Logo />
          <Text style={globalStyles.title}>Welcome</Text>
          <Text style={globalStyles.text}>
            Enter your email and password to access your account
          </Text>
        </View>

        <View style={globalStyles.formContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={ReviewSchema}
            onSubmit={(values, actions) => {
              pressHandler();
              actions.resetForm();
            }}
          >
            {(props) => (
              <>
                {/* Email */}
                <Input
                  marginBottom="16px"
                  style={globalStyles.input}
                  color="black"
                  value={props.values.email}
                  onChangeText={props.handleChange("email")}
                  borderColor="rgba(10, 37, 64, 0.32)"
                  size="sm"
                  placeholder="Email"
                  label="Email"
                  type="email"
                  onBlur={props.handleBlur("email")}
                />
                {props.touched.email && props.errors.email ? (
                  <Text style={globalStyles.textError}>
                    {props.errors.email}
                  </Text>
                ) : (
                  ""
                )}
                {/* Password */}
                <Input
                  marginBottom="16px"
                  style={globalStyles.input}
                  color="black"
                  value={props.values.password}
                  onChangeText={props.handleChange("password")}
                  borderColor="rgba(10, 37, 64, 0.32)"
                  size="sm"
                  placeholder="Password"
                  label="Password"
                  onBlur={props.handleBlur("password")}
                  type="password"
                />
                {props.touched.password && props.errors.password ? (
                  <Text style={globalStyles.textError}>
                    {props.errors.password}
                  </Text>
                ) : (
                  ""
                )}

                <ButtonComponent
                  type="submit"
                  title={title}
                  onPress={
                    props.errors.email || props.errors.password
                      ? null
                      : props.handleSubmit
                  }
                />
              </>
            )}
          </Formik>

          <View style={globalStyles.rule}>
            <View style={globalStyles.ruleLine} />
            <Text style={globalStyles.textOr}>OR</Text>
            <View style={globalStyles.ruleLine} />
          </View>
          <Button
            colorScheme="primary.100"
            marginTop="3"
            borderColor="primary.400"
            variant="outline"
            leftIcon={<FacebookIcon />}
          >
            Sign up with Facebook
          </Button>
          <Button
            colorScheme="primary.100"
            borderColor="primary.400"
            marginTop="3"
            variant="outline"
            leftIcon={<GoogleIcon />}
          >
            Sign up with Google
          </Button>
          <Stack marginTop="32px" alignItems="center">
            <TouchableOpacity
              onPress={() => navigation.navigate("ResetPassword")}
            >
              <Text>Do you forget your password? </Text>
            </TouchableOpacity>
          </Stack>
          <Stack direction="row" marginTop="32px" justifyContent="center">
            <Text>Do not have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <TextNative color="primary.400">Register now</TextNative>
            </TouchableOpacity>
          </Stack>
          <Button
            paddingY="11px"
            marginTop="32px"
            alignSelf="center"
            borderColor="#00C48C"
            borderRadius="30px"
            width="128px"
            variant="outline"
            leftIcon={<SupportIcon />}
          >
            Support
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default setLoading(SignIn);
