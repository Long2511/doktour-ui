import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Border, Color, FontSize} from "../GlobalStyle/GlobalStyles";
import {useNavigation} from "@react-navigation/native";
import * as React from "react";
import {useEffect} from "react";

const MatchedDoctorScreen = () => {
  const navigation = useNavigation();

  const [doctorName, setDoctorName] = React.useState("");
  const [distance, setDistance] = React.useState("");
  const [profession, setProfession] = React.useState("");
  const doctorImage = require("../assets/doctor-images/bd7acbea-c1b1-46c2-aed5-3ad53abb28ba.png");

  useEffect(() => {
    setDoctorName("Dr. Bellamy N");
    setDistance("10");
    setProfession("Cardiology");
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require("../assets/back.png")}
            style={{
              width: 30,
              height: 30,
              resizeMode: "contain",
              marginLeft: Border.lg,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Doctor found!</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.text}>
          We found a doctor matched your criteria.
        </Text>
        <Text style={styles.text}>Estimation Time: {distance} min(s)</Text>
        <View style={styles.doctorCard}>
          <Image source={doctorImage}></Image>
          <View style={styles.doctorTitleContainer}>
            <Text style={styles.doctorTitle}>{doctorName}</Text>
            <Text>{profession}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OverviewAboutDoctor");
            }}>
            <Text style={styles.buttonText}>Track their journey</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 10},
  headerContainer: {flex: 1.5, alignItems: "center", justifyContent: "center"},
  bodyContainer: {
    flex: 7,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Border.xlg,
    paddingHorizontal: Border.xlg,
  },
  bottomContainer: {flex: 1.5},
  buttonContainer: {
    marginVertical: Border.lg,
    width: "90%",
    height: 50,
    backgroundColor: "#20A4F3",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingBottom: Border.xsm,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    marginTop: 5,
  },
  doctorTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
    fontSize: FontSize.size_5xl * 1.5,
  },
  doctorCard: {
    marginTop: Border.xlg,
    flexDirection: "row",
    justifyContent: "center",
  },
  doctorTitleContainer: {
    paddingLeft: Border.xsm,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    alignSelf: "flex-start",
  },
  text: {
    fontSize: FontSize.size_lg,
    color: Color.slategray_100,
  },
});

export default MatchedDoctorScreen;
