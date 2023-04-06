import {Button, Text, View} from "react-native";

// @ts-ignore
const PatientInformation = ({navigation}) => {
  return (
    <View>
      <Text> PatientInformation </Text>
      <Button
        title={"SOS"}
        onPress={() => {
          navigation.navigate("SOS");
        }}
      />
    </View>
  );
};

export default PatientInformation;
