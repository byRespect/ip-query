import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { InfoIcon } from "../assets/Icons";

function GeolocationPage() {
  const { data } = useSelector((state) => state.ipData);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "90%", flexDirection: "column", marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <InfoIcon style={{ marginRight: 5 }} />
            <Text style={styles.textHead}>Currency</Text>
          </View>
          <View style={styles.HR}></View>
          <View style={styles.container}>
            <View style={styles.containerItem}>
              <Text style={styles.textHead}>CODE</Text>
              <Text style={styles.textContent}>
                {data.currency.code ? data.currency.code : "null"}
              </Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.textHead}>SYMBOL</Text>
              <Text style={styles.textContent}>
                {data.currency.symbol ? data.currency.symbol : "null"}
              </Text>
            </View>
            <View
              style={{ flex: 1, flexDirection: "column", overflow: "hidden" }}
            >
              <Text style={styles.textHead}>NAME</Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.textContent}
              >
                {data.currency.name ? data.currency.name : "null"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <View style={styles.containerItem}>
              <Text style={styles.textHead}>NATİVE</Text>
              <Text style={styles.textContent}>
                {data.currency.native ? data.currency.native : "null"}
              </Text>
            </View>
            <View style={{ flex: 2, flexDirection: "column" }}>
              <Text style={styles.textHead}>PLURAL</Text>
              <Text style={styles.textContent}>
                {data.currency.plural ? data.currency.plural : "null"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <InfoIcon style={{ marginRight: 5 }} />
            <Text style={styles.textHead}>TIME ZONE</Text>
          </View>
          <View style={styles.HR}></View>
          <View style={styles.container}>
            <View style={styles.containerItem}>
              <Text style={styles.textHead}>IS DST</Text>
              <Text style={styles.textContent}>
                {data.time_zone.is_dst ? JSON.stringify(data.time_zone.is_dst) : "null"}
              </Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.textHead}>ABBR</Text>
              <Text style={styles.textContent}>
                {data.time_zone.abbr ? data.time_zone.abbr : "null"}
              </Text>
            </View>
            <View style={styles.containerItem}>
              <Text style={styles.textHead}>OFFSET</Text>
              <Text style={styles.textContent}>
                {data.time_zone.offset ? data.time_zone.offset : "null"}
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={{ flex: 0, flexDirection: "column" }}>
              <Text style={styles.textHead}>NAME</Text>
              <Text style={styles.textContent}>
                {data.time_zone.name ? data.time_zone.name : "null"}
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={{ flex: 0, flexDirection: "column" }}>
              <Text style={styles.textHead}>CURRENT TIME</Text>
              <Text style={styles.textContent}>
                {data.time_zone.current_time
                  ? data.time_zone.current_time
                  : "null"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  HR: {
    backgroundColor: "#ffffff1a",
    height: 1,
    marginBottom: 15,
  },
  containerItem: {
    flex: 1,
    flexDirection: "column",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
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
});

export default GeolocationPage;
