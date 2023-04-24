import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Border} from "../GlobalStyle/GlobalStyles";
import Lottie from "lottie-react-native";
import {useEffect, useRef} from "react";
import {NavigationActions} from "react-navigation";
import navigate = NavigationActions.navigate;

// @ts-ignore
const FindDoctorScreen = ({navigation}) => {
  const animationRef = useRef<Lottie>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchAnimationContainer}>
        <Lottie
          ref={animationRef}
          source={require("../assets/search-doctor.json")}
          onAnimationFinish={() => {
            navigation.navigate("Matched Doctor");
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Matched Doctor");
            }}>
            <Text style={styles.buttonText}>Cancel</Text>
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
  searchAnimationContainer: {
    flex: 8,
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
  buttonText: {
    marginTop: 10,
    color: "white",
    fontSize: 20,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FindDoctorScreen;
