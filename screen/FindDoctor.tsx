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
import {Border} from "../GlobalStyle/GlobalStyles";

// @ts-ignore
const FindDoctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchAnimationcontainer}></View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Patient Information");
            }}>
            <Text style={styles.title}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  searchAnimationcontainer: {
    flex: 8,
    backgroundColor: "red",
  },
  buttonContainer: {
    marginVertical: Border.lg,
    flex: 2,
    width: "90%",
    height: 50,
    backgroundColor: "#20A4F3",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingBottom: Border.xsm,
  },
  title: {color: "white", fontSize: 20},
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default FindDoctor;
