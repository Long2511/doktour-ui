import {Button, Text, View} from "react-native";

// @ts-ignore
const SOSScreen = ({navigation}) => {
  return (
    <View>
      <Text> SOSScreen </Text>
      <Button
        title={"Patient Information"}
        onPress={() => {
          navigation.navigate("Patient Information");
        }}
      />
    </View>
  );
};

export default SOSScreen;
