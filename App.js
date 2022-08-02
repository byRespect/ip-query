import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import { navigationRef } from "./navigator/RootNavigation";
import TabComp from "./components/TabComp";
import SearchComp from "./components/SearchComp";
import SummaryPage from "./pages/Summary";
import { RouteNameSet } from "./redux/Slices/RouteSlice";
import ThreatsPage from "./pages/Threats";
import { useEffect, useState } from "react";
import OrganisationPage from "./pages/Organisation";
import GeolocationPage from "./pages/Geolocation";
import { QueryData } from "./utils";
import { DangerIcon } from "./assets/Icons";

const PagesInitialize = [
  { name: "Summary", component: SummaryPage },
  { name: "Threats", component: ThreatsPage },
  { name: "Organisation", component: OrganisationPage },
  { name: "Geolocation", component: GeolocationPage },
];

const Stack = createNativeStackNavigator();
export default function App() {
  const [route, setRoute] = useState({});
  const [ipData, setIpData] = useState({});
  store.subscribe(() => {
    setRoute(store.getState().route);
    setIpData(store.getState().ipData);
  });

  const funcStateChange = (state) => {
    store.dispatch(RouteNameSet(state.routes[state.index].name));
  };

  useEffect(() => {
    QueryData();
  }, []);

  return (
    <SafeAreaView
      style={[styles.AndroidSafeArea, { backgroundColor: "#2b354f" }]}
    >
      <Provider store={store}>
        <View style={styles.container}>
          <SearchComp />
          <TabComp />
        </View>
        {ipData.loading && !(ipData.error.length > 0) ? (
          <NavigationContainer
            onStateChange={funcStateChange}
            theme={{ colors: { background: "#2b354f" } }}
            ref={navigationRef}
          >
            <Stack.Navigator
              initialRouteName={route.RouteName}
              screenOptions={{
                animation: "fade",
              }}
            >
              {PagesInitialize.map((page, index) => (
                <Stack.Screen
                  key={index}
                  name={page.name}
                  component={page.component}
                  options={{ headerShown: false }}
                />
              ))}
            </Stack.Navigator>
          </NavigationContainer>
        ) : ipData.loading && ipData.error.length > 0 ? (
          <View style={styles.warningContainer}>
            <DangerIcon style={{ marginBottom: 15 }} />
            <Text style={styles.textError}>{ipData.error}</Text>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <ActivityIndicator
              size={"large"}
              color={"#ffff"}
            ></ActivityIndicator>
          </View>
        )}
      </Provider>
    </SafeAreaView>
  );
}

StatusBar.setBarStyle("light-content", true);
const styles = StyleSheet.create({
  textError: {
    color: "white",
    fontWeight: "300",
  },
  warningContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    paddingTop: 20,
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#2b354f",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
