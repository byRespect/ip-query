import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { InfoIcon } from "../assets/Icons";

function OrganisationPage() {
  const { data } = useSelector((state) => state.ipData);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.containerItem}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <InfoIcon style={{ marginRight: 5 }} />
            <Text style={styles.textHead}>ASN</Text>
          </View>
          <View style={styles.HR}></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <View style={styles.itemContainer}>
              <Text style={styles.textHead}>ASN</Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.textContent}
              >
                {data.asn.asn ? data.asn.asn : "null"}
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.textHead}>TYPE</Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.textContent}
              >
                {data.asn.type ? data.asn.type : "null"}
              </Text>
            </View>
          </View>
          <View style={styles.itemsContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.textHead}>Domain</Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.textContent}
              >
                {data.asn.domain ? data.asn.domain : "null"}
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.textHead}>ROUTE</Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.textContent}
              >
                {data.asn.route ? data.asn.route : "null"}
              </Text>
            </View>
          </View>
          <View style={styles.itemsContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.textHead}>NAME</Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.textContent}
              >
                {data.asn.name ? data.asn.name : "null"}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.containerItem}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <InfoIcon style={{ marginRight: 5 }} />
            <Text style={styles.textHead}>COMPANY</Text>
          </View>
          <View style={styles.HR}></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <View style={styles.itemContainer}>
              <Text style={styles.textHead}>NAME</Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.textContent}
              >
                {data.company.name ? data.company.name : "null"}
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.textHead}>DOMAİN</Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.textContent}
              >
                {data.company.domain ? data.company.domain : "null"}
              </Text>
            </View>
          </View>
          <View style={styles.itemsContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.textHead}>TYPE</Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.textContent}
              >
                {data.company.type ? data.company.type : "null"}
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.textHead}>NETWORK</Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.textContent}
              >
                {data.company.network ? data.company.network : "null"}
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
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
    flexDirection: "column",
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerItem: {
    width: "90%",
    flexDirection: "column",
    marginTop: 10,
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

export default OrganisationPage;
