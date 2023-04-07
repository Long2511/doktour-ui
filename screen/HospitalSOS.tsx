import * as React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// @ts-ignore
const HospitalSOS = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: "100%",
              height: 450,
              resizeMode: "contain",
              marginBottom: -40,
            }}
            resizeMethod="scale"
            source={require("../assets/HospitalSOSBanner.png")}
          />
        </View>
        <View style={styles.sosButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Patient Information");
            }}>
            <Image
              style={{
                width: 180,
                height: 180,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              resizeMethod="scale"
              source={require("../assets/SOSButton.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Patient Information");
            }}>
            <Text style={styles.text}>SOS Dashboard</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    width: "80%",
    height: 50,
    backgroundColor: "#20A4F3",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  text: {color: "white", fontSize: 20},
  sosButton: {paddingBottom: 20},
});

export default HospitalSOS;
