import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedbackComponent,
  View,
} from "react-native";
import {FontSize, Border, Color} from "../GlobalStyle/GlobalStyles";
import DropDownPicker from "react-native-dropdown-picker";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux-toolkit/store/store";
import {increment} from "../redux-toolkit/slice/patientInformationSlice";
// @ts-ignore
import SwitchSelector from "react-native-switch-selector";
import * as React from "react";

// @ts-ignore
const PatientInformation = ({navigation}) => {
  const patientInformation = useSelector(
    (state: RootState) => state.patientInformation.value,
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    {label: "Spain", value: "spain"},
    {label: "Madrid", value: "madrid", parent: "spain"},
    {label: "Barcelona", value: "barcelona", parent: "spain"},
    {label: "Italy", value: "italy"},
    {label: "Rome", value: "rome", parent: "italy"},
    {label: "Finland", value: "finland"},
  ]);

  const genderOptions = [
    {label: "Male", value: "male"},
    {label: "Female", value: "female"},
    {label: "Other", value: "other"},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}> Patient Information </Text>
      </View>
      <View style={styles.selectionSection}>
        <Text style={styles.specialtyText}>Specialty in need</Text>
        <View style={styles.dropDown}>
          <DropDownPicker
            placeholder="Select specialty"
            setValue={setValue}
            value={value}
            items={items}
            open={open}
            setOpen={setOpen}
            setItems={setItems}
            zIndexInverse={2}
            style={{
              backgroundColor: Color.milkWhite,
            }}
            textStyle={{
              color: Color.darkslategray_100,
              fontWeight: "bold",
            }}
            dropDownContainerStyle={{
              backgroundColor: Color.milkWhite,
            }}
          />
        </View>
        <Text style={styles.titleBold}>Patient Details</Text>
        <Text style={[styles.subTitleContainer, styles.specialtyText]}>
          Gender
        </Text>
        <SwitchSelector
          options={genderOptions}
          textColor={Color.darkslategray_100}
          selectedColor={Color.white}
          buttonColor={Color.deepskyblue_100}
          borderColor={Color.slategray_200}
          boderRadius={90}
          animationDuration={150}
          backgroundColor={Color.milkWhite}
          height={50}
          borderWidth={2}
          style={styles.selectorButton}
        />
        <View style={styles.subTitleContainer}>
          <Text style={styles.specialtyText}>Age</Text>
          <TextInput
            style={{
              paddingTop: Border.xsm,
              backgroundColor: Color.shadedWhite,
              borderRadius: Border.xsm,
            }}
          />
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.specialtyText}>Short Description</Text>
          <TextInput
            style={{
              paddingTop: Border.xsm,
              backgroundColor: Color.shadedWhite,
              borderRadius: Border.xsm,
            }}
            multiline={true}
            numberOfLines={4}
            placeholder={"Please describe your case"}
            placeholderTextColor={Color.gray04}
            textAlignVertical={"top"}
          />
          <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
            <TouchableOpacity>
              <Image
                source={require("../assets/camera.png")}
                style={{
                  width: 180,
                  height: 180,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/mic.png")}
                style={{
                  marginTop: 50,
                  width: 180,
                  height: 100,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate("Patient Information");
            }}>
            <Text style={styles.sosText}>SOS Dashboard</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Color.white, zIndex: 1},
  textContainer: {
    height: "10%",
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_lg,
    fontWeight: "200",
  },
  titleBold: {
    marginTop: Border.lg,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
  },
  specialtyText: {
    color: Color.slategray_100,
    fontSize: FontSize.size_sm,
    paddingBottom: Border.xsm,
    fontWeight: "bold",
  },
  selectionSection: {
    flexGrow: 1,
    width: "90%",
    alignSelf: "center",
  },
  dropDown: {zIndex: 2},
  selectorButton: {marginTop: Border.lg},
  subTitleContainer: {marginTop: Border.lg},
  sosText: {fontSize: 20, color: Color.white},
  buttonContainer: {
    marginTop: Border.lg,
    width: "100%",
    height: 50,
    backgroundColor: "#20A4F3",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});

export default PatientInformation;
