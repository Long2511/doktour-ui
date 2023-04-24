import type {PropsWithChildren} from "react";
import React from "react";
import {StyleSheet, Text, useColorScheme, View} from "react-native";

import {Colors} from "react-native/Libraries/NewAppScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PatientInformationScreen from "./screen/PatientInformationScreen";
import HospitalSOSScreen from "./screen/HospitalSOSScreen";
import {Provider} from "react-redux";
import {store} from "./redux-toolkit/store/store";
import FindDoctorScreen from "./screen/FindDoctorScreen";
import DashboardScreen from "./screen/DashboardScreen";
import MatchedDoctorScreen from "./screen/MatchedDoctorScreen";
import OverviewAboutDoctor from "./screen/OverviewAboutDoctor";

const Stack = createNativeStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Section = ({children, title}: SectionProps) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"Hospital SOS"}
            component={HospitalSOSScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={"Patient Information"}
            component={PatientInformationScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={"Find Doctor"}
            component={FindDoctorScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={"SOS Dashboard"}
            component={DashboardScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={"Matched Doctor"}
            component={MatchedDoctorScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={"OverviewAboutDoctor"}
            component={OverviewAboutDoctor}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
