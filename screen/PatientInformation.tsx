import {Button, StyleSheet, Text, View} from "react-native";
import {FontSize, Border, Color} from "../GlobalStyle/GlobalStyles";
import DropDownPicker from "react-native-dropdown-picker";
import {useState} from "react";
// @ts-ignore
const PatientInformation = ({navigation}) => {
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
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}> PatientInformation </Text>
      </View>
      <View style={styles.selectionSection}>
        <Text style={styles.specialtyText}>Specialty in need</Text>
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
            backgroundColor: Color.darkgray,
          }}
          textStyle={{
            color: Color.darkslategray_100,
            fontWeight: "bold",
          }}
          containerStyle={{
            borderColor: Color.darkgray,
            borderStyle: "dotted",
          }}
          dropDownContainerStyle={{
            backgroundColor: Color.darkgray,
            zIndex: 2,
          }}
        />
        <Text style={styles.titleBold}>Patient Details</Text>
      </View>
      <Button
        title={"SOS"}
        onPress={() => {
          navigation.navigate("Hospital SOS");
        }}
      />
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
    marginTop: Border.br_xl,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
  },
  specialtyText: {
    color: Color.slategray_100,
    fontSize: FontSize.size_sm,
    paddingBottom: Border.br_3xs,
  },
  selectionSection: {
    flexGrow: 1,
    width: "90%",
    alignSelf: "center",
  },
});

export default PatientInformation;
