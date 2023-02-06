import { Button, Input, ScrollView, Stack } from "native-base";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Text as TextNative } from "native-base";
import ButtonComponent from "../../UI/Button";
import Logo from "../../assets/Icons/Logo";
import SupportIcon from "../../assets/Icons/SupportIcon";
import { globalStyles } from "../Themes/globalStyles";
import { Formik } from "formik";
import * as yup from "yup";
import setLoading from "../HOC/setLoading";

const ReviewSchema = yup.object({
  email: yup.string().required("Email is required").email("Invalid email"),
});

const initialValues = {
  email: "",
};

const ResetPassword = ({ navigation }) => {
  const title = "Login";

  const pressHandler = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View style={{ alignItems: "center" }}>
          <Logo />
          <Text style={globalStyles.title}>Forgot Password</Text>
          <Text style={globalStyles.text}>
            Enter your email and you'll receive an email to recover your
            password
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
                {props.touched.email && props.errors.email && (
                  <Text style={globalStyles.textError}>
                    {props.errors.email}
                  </Text>
                )}

                <ButtonComponent
                  onPress={props.errors.email ? null : props.handleSubmit}
                  title={title}
                  type="submit"
                />
              </>
            )}
          </Formik>

          <Stack direction="row" marginTop="32px" justifyContent="center">
            <Text>Do you have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <TextNative color="primary.400">Sign in now</TextNative>
            </TouchableOpacity>
          </Stack>
          <Button
            _text={{ color: "text.primary" }}
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

export default setLoading(ResetPassword);
