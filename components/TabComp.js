import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { useSelector } from "react-redux";
import { navigate } from "../navigator/RootNavigation";

function TabComp() {
  const { RouteName } = useSelector((state) => state.route);
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="#ffffff1a"
        style={[styles.tab, RouteName == "Summary" ? styles.active : null]}
        onPress={() => {
          navigate("Summary");
        }}
      >
        <Text style={{ color: "white", fontWeight: "100" }}>Summary</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#ffffff1a"
        style={[styles.tab, RouteName == "Threats" ? styles.active : null]}
        onPress={() => {
          navigate("Threats");
        }}
      >
        <Text style={{ color: "white", fontWeight: "100" }}>Threats</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#ffffff1a"
        style={[styles.tab, RouteName == "Organisation" ? styles.active : null]}
        onPress={() => {
          navigate("Organisation");
        }}
      >
        <Text style={{ color: "white", fontWeight: "100" }}>Organisation</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#ffffff1a"
        style={[styles.tab, RouteName == "Geolocation" ? styles.active : null]}
        onPress={() => {
          navigate("Geolocation");
        }}
      >
        <Text style={{ color: "white", fontWeight: "100" }}>Geolocation</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: "#ffffff1a",
    color: "white",
  },
  tab: {
    color: "#ffffffbf",
    padding: 7,
    borderWidth: 1,
    borderColor: "#ffffff1a",
    borderBottomWidth: 0,
    borderTopEndRadius: 7,
    borderTopStartRadius: 7,
  },
  container: {
    padding: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    //backgroundColor: "red",
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff1a",
  },
});

export default TabComp;
