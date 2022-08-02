import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";
import { DangerIcon, OkeyIcon } from "../assets/Icons";

function SummaryPage() {
  const [threats, setThreats] = useState(0);
  const { data } = useSelector((state) => state.ipData);
  useEffect(() => {
    Object.entries(data.threat).forEach(([key, value]) => {
      if (typeof value === "boolean" && value === true) {
        setThreats((threats) => ++threats);
      }
    });
  }, [data]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.blockContainer}>
          <View style={styles.mapContainer}>
            <MapView
              style={{
                width: 170,
                height: 138,
              }}
              mapType={"hybrid"}
              initialRegion={{
                latitude: data.latitude,
                longitude: data.longitude,
                latitudeDelta: 1.0922,
                longitudeDelta: 1.0421,
              }}
              region={{
                latitude: data.latitude,
                longitude: data.longitude,
                latitudeDelta: 1.0922,
                longitudeDelta: 1.0421,
              }}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ paddingLeft: 15 }}>
              <Text style={styles.textHead}>IP</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}
                  style={[styles.textContent, { flex: 1 }]}
                >
                  {data.ip}
                </Text>
              </View>
            </View>
            <View style={[styles.itemContent, { paddingLeft: 15 }]}>
              <Text style={styles.textHead}>Country</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image style={styles.flagIcon} source={{ uri: data.flag }} />
                <Text
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}
                  style={[styles.textContent]}
                >
                  {data.country_name ? data.country_name : "null"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.blockContainer}>
          <View style={styles.itemContent}>
            <Text style={styles.textHead}>City</Text>
            <Text
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={[styles.textContent, { paddingRight: 2 }]}
            >
              {data.city ? data.city : "null"}
            </Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.textHead}>Country Code</Text>
            <Text style={styles.textContent}>
              {data.country_code ? data.country_code : "null"}
            </Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.textHead}>Continent</Text>
            <Text style={styles.textContent}>
              {data.continent_code ? data.continent_code : "null"}
            </Text>
          </View>
        </View>
        <View style={styles.blockContainer}>
          <View style={styles.itemContent}>
            <Text style={styles.textHead}>Currency</Text>
            <Text style={styles.textContent}>
              {data.currency.code ? data.currency.code : "null"}
            </Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.textHead}>Organisation</Text>
            <Text
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={styles.textContent}
            >
              {data.company.name ? data.company.name : "null"}
            </Text>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.textHead}>Threats</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {threats === 0 ? (
                <OkeyIcon style={{ marginRight: 10 }} />
              ) : (
                <DangerIcon style={{ marginRight: 10 }} />
              )}
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.textContent}
              >
                {threats}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.blockContainer}>
          <View style={styles.itemContent}>
            <Text style={styles.textHead}>Time Zone</Text>
            <Text
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={styles.textContent}
            >
              {data.time_zone.name ? data.time_zone.name : "null"}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default SummaryPage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  blockContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5,
  },
  mapContainer: {
    flex: 1,
    borderRadius: 10,
    width: 160,
    height: 135,
    overflow: "hidden",
  },
  flagIcon: {
    width: 32,
    height: 32,
    borderRadius: 50,
    marginRight: 10,
  },
  textHead: {
    color: "#ffffff80",
    fontWeight: "300",
    textTransform: "uppercase",
  },
  textContent: {
    color: "white",
    fontSize: 21,
    lineHeight: 38,
    fontWeight: "200",
  },
  itemContent: {
    flex: 1,
    paddingTop: 20,
  },
});
