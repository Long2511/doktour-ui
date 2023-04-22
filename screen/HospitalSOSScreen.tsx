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
const HospitalSOSScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: "100%",
              height: 450,
              resizeMode: "contain",
            }}
            resizeMethod="scale"
            source={require("../assets/HospitalSOSBanner.png")}
          />
        </View>
        <View style={styles.bottomContainer}>
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
                navigation.navigate("SOS Dashboard");
              }}>
              <Text style={styles.title}>SOS Dashboard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "D0D6EA",
  },
  imageContainer: {
    flex: 1,
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    marginTop: "15%",
    flex: 1,
    justifyContent: "flex-end",
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
  title: {color: "white", fontSize: 20},
  sosButton: {paddingBottom: "15%"},
});

export default HospitalSOSScreen;
