import { Formik } from "formik";
import React from "react";
import { Text, TextInput, Button as ButtonNative } from "react-native";
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Input,
  Radio,
  ScrollView,
  Text as TextBase,
} from "native-base";
import Card from "../../UI/Card";
import { globalStyles } from "../Themes/globalStyles";
import * as yup from "yup";
import EuroIcon from "../../assets/Icons/EuroIcon";
import QuadradIcon from "../../assets/Icons/QuadradIcon";
import GramIcon from "../../assets/Icons/GramIcon";
import TextArea from "./TextArea";
import { Entypo } from "@expo/vector-icons";
import setLoading from "../HOC/setLoading";
import SelectComponent from "./SelectComponent";

const ReviewSchema = yup.object({
  name: yup.string().required().min(4),
  price: yup.string().required(),
});

const NewProduct = ({ setModal, addProduct }) => {
  const [radioValue, setRadioValue] = React.useState("one");

  return (
    <ScrollView>
      <Box p="15px">
        <Box>
          <Button
            onPress={() => setModal(false)}
            bgColor="#fff"
            shadow={9}
            maxWidth="147px"
            colorScheme="#103B66"
            borderRadius="105"
            borderColor="#21B8F9"
            leftIcon={
              <Entypo name="chevron-thin-left" size={16} color="#103B66" />
            }
            variant="outline"
          >
            All products
          </Button>
          <TextBase fontWeight="600" fontSize="28px" color="#103B66" mt="24px">
            New product
          </TextBase>
          <HStack mt="24px" mb="24px">
            <TextBase
              fontWeight="600"
              fontSize="12px"
              paddingY="10px"
              paddingX="55px"
              color="#21B8F9"
              borderBottomColor="#21B8F9"
              borderBottomWidth="3"
            >
              info
            </TextBase>
            <TextBase
              fontWeight="600"
              fontSize="12px"
              paddingY="10px"
              paddingX="55px"
              color="#3B5166"
            >
              variants
            </TextBase>
          </HStack>
        </Box>
        <Formik
          initialValues={{ name: "", price: "" }}
          validationSchema={ReviewSchema}
          onSubmit={(values, actions) => {
            addProduct(values);
            actions.resetForm();
            console.log(values);
          }}
        >
          {(props) => (
            <>
              <Card>
                <TextBase
                  mb="24px"
                  color="#103B66"
                  fontSize="20px"
                  fontWeight="600"
                >
                  General Information
                </TextBase>
                <TextBase
                  mb="8px"
                  color="#546679"
                  fontSize="15px"
                  fontWeight="600"
                >
                  Product name
                </TextBase>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Lorem ipsum"
                  onChangeText={props.handleChange("name")}
                  value={props.values.name}
                  onBlur={props.handleBlur("name")}
                />
                <Text style={globalStyles.textError}>
                  {props.touched.name && props.errors.name}
                </Text>
                <TextBase
                  mb="8px"
                  color="#546679"
                  fontSize="15px"
                  fontWeight="600"
                >
                  Description
                </TextBase>
                <TextArea />
              </Card>
              <Card>
                <TextBase
                  mb="24px"
                  color="#103B66"
                  fontSize="20px"
                  fontWeight="600"
                >
                  Price
                </TextBase>
                <TextBase
                  mb="8px"
                  color="#546679"
                  fontSize="15px"
                  fontWeight="600"
                >
                  Original price
                </TextBase>
                <Input
                  color="#000"
                  borderColor="#CED3D9"
                  InputLeftElement={
                    <Box ml="13px">
                      <EuroIcon />
                    </Box>
                  }
                  placeholder="0"
                  onChangeText={props.handleChange("price")}
                  value={props.values.price}
                  onBlur={props.handleBlur("price")}
                />
                <Text style={globalStyles.textError}>
                  {props.touched.price && props.errors.price}
                </Text>
                <TextBase
                  mb="8px"
                  color="#546679"
                  fontSize="15px"
                  fontWeight="600"
                >
                  Discount price
                </TextBase>
                <Input
                  color="#000"
                  _disabled={{ bgColor: "#E7E9EC" }}
                  isDisabled
                  borderColor="#CED3D9"
                  InputLeftElement={
                    <Box ml="13px">
                      <EuroIcon />
                    </Box>
                  }
                  placeholder="Lorem ipsum"
                />

                <HStack mt="24px" space={6}>
                  <Checkbox
                    borderColor="rgba(10, 37, 64, 0.15)"
                    width="24px"
                    height="24px"
                    bgColor="white"
                    value="test"
                    accessibilityLabel="This is a dummy checkbox"
                  />
                  <TextBase fontSize="16px" color="#103B66">
                    Activate discounted price
                  </TextBase>
                </HStack>
              </Card>
              <Card>
                <TextBase
                  mb="24px"
                  color="#103B66"
                  fontSize="20px"
                  fontWeight="600"
                >
                  Details
                </TextBase>
                <SelectComponent />
                <TextBase
                  mb="8px"
                  color="#546679"
                  fontSize="15px"
                  fontWeight="600"
                >
                  Product code / SKU
                </TextBase>
                <Input
                  color="#000"
                  borderColor="#CED3D9"
                  placeholder="Leave empty to automatically generate"
                />

                <TextBase
                  mt="24px"
                  mb="8px"
                  color="#546679"
                  fontSize="15px"
                  fontWeight="600"
                >
                  Weight
                </TextBase>
                <Input
                  color="#000"
                  borderColor="#CED3D9"
                  InputLeftElement={
                    <Box ml="12px">
                      <GramIcon />
                    </Box>
                  }
                  placeholder="0 g"
                />

                <TextBase
                  mb="8px"
                  color="#546679"
                  fontSize="15px"
                  fontWeight="600"
                >
                  Availability
                </TextBase>
                <Input
                  color="#000"
                  borderColor="#CED3D9"
                  InputLeftElement={
                    <Box ml="12px">
                      <QuadradIcon />
                    </Box>
                  }
                  placeholder="Lorem ipsum"
                />
              </Card>
              <Card>
                <TextBase
                  mb="24px"
                  color="#103B66"
                  fontSize="20px"
                  fontWeight="600"
                >
                  Product type
                </TextBase>
                <Radio.Group
                  direction="row"
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={radioValue}
                  onChange={(nextValue) => {
                    setRadioValue(nextValue);
                  }}
                >
                  <Radio bgColor="#fff" shadow={2} value="one" my="1">
                    <Text fontSize="17px" color="#103B66">
                      Physical
                    </Text>
                  </Radio>
                  <Radio ml="24px" bgColor="#fff" shadow={2} value="two" my="1">
                    <Text fontSize="17px" color="#103B66">
                      Digital
                    </Text>
                  </Radio>
                </Radio.Group>
              </Card>
              <Card>
                <ButtonNative title="Submit" onPress={props.handleSubmit} />
              </Card>
            </>
          )}
        </Formik>
      </Box>
    </ScrollView>
  );
};

export default setLoading(NewProduct);
