import { Button, Input, ScrollView, Stack } from "native-base";
import ButtonComponent from "../../UI/Button";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Text as TextNative } from "native-base";
import Logo from "../../assets/Icons/Logo";
import GoogleIcon from "../../assets/Icons/GoogleIcon";
import FacebookIcon from "../../assets/Icons/FacebookIcon";
import SupportIcon from "../../assets/Icons/SupportIcon";
import { globalStyles } from "../Themes/globalStyles";
import * as yup from "yup";
import { Formik } from "formik";
import setLoading from "../HOC/setLoading";

const ReviewSchema = yup.object({
  name: yup.string().required().min(4),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required()
    .min(7, "Pasword must be longer then 7 chars"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const SignUp = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View style={{ alignItems: "center" }}>
          <Logo />
          <Text style={globalStyles.title}>Create your e-commerce</Text>
          <Text style={globalStyles.text}>
            Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio
            online in pochi minuti. Nessuna carta di credito richiesta.
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
                {/* Nam and Surname */}
                <Input
                  marginBottom="16px"
                  style={globalStyles.input}
                  color="black"
                  value={props.values.name}
                  onChangeText={props.handleChange("name")}
                  borderColor="rgba(10, 37, 64, 0.32)"
                  size="sm"
                  placeholder="Name and Surname"
                  label="Name"
                  onBlur={props.handleBlur("name")}
                />
                {props.touched.name && props.errors.name && (
                  <Text style={globalStyles.textError}>
                    {props.errors.name}
                  </Text>
                )}

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
                {props.touched.password && props.errors.password && (
                  <Text style={globalStyles.textError}>
                    {props.errors.password}
                  </Text>
                )}
                <ButtonComponent
                  type="submit"
                  title="Create your shop"
                  onPress={
                    props.errors.name ||
                    props.errors.email ||
                    props.errors.password
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
            marginTop="3"
            borderColor="primary.400"
            variant="outline"
            leftIcon={<FacebookIcon />}
          >
            Sign up with Facebook
          </Button>
          <Button
            borderColor="primary.400"
            marginTop="3"
            variant="outline"
            leftIcon={<GoogleIcon />}
          >
            Sign up with Google
          </Button>
          <Stack direction="row" marginTop="32px" justifyContent="center">
            <Text>Do you have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <TextNative color="primary.400">Sign it now</TextNative>
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

export default setLoading(SignUp);
