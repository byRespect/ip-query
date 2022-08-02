import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { CancelIcon, DangerIcon, InfoIcon } from "../assets/Icons";
import BlockInfoComp from "../components/BlockInfo";

function ThreatsPage() {
  const {
    data: { threat },
  } = useSelector((state) => state.ipData);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.blockContainer}>
          <View style={styles.itemContainer}>
            {threat.is_tor ? (
              <DangerIcon style={{ marginRight: 10 }} />
            ) : (
              <CancelIcon style={{ marginRight: 10 }} />
            )}
            <Text style={styles.text}>Tor</Text>
          </View>
          <View style={styles.itemContainer}>
            {threat.is_vpn ? (
              <DangerIcon style={{ marginRight: 10 }} />
            ) : (
              <CancelIcon style={{ marginRight: 10 }} />
            )}
            <Text style={styles.text}>VPN</Text>
          </View>
          <View style={styles.itemContainer}>
            {threat.is_icloud_relay ? (
              <DangerIcon style={{ marginRight: 10 }} />
            ) : (
              <CancelIcon style={{ marginRight: 10 }} />
            )}
            <Text
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={styles.text}
            >
              iCloud Relay
            </Text>
          </View>
        </View>
        <View style={[styles.blockContainer, { marginTop: 10 }]}>
          <View style={styles.itemContainer}>
            {threat.is_bogon ? (
              <DangerIcon style={{ marginRight: 10 }} />
            ) : (
              <CancelIcon style={{ marginRight: 10 }} />
            )}
            <Text style={styles.text}>Bogon</Text>
          </View>
          <View style={styles.itemContainer}>
            {threat.is_proxy ? (
              <DangerIcon style={{ marginRight: 10 }} />
            ) : (
              <CancelIcon style={{ marginRight: 10 }} />
            )}
            <Text style={styles.text}>Proxy</Text>
          </View>
          <View style={styles.itemContainer}>
            {threat.is_anonymous ? (
              <DangerIcon style={{ marginRight: 10 }} />
            ) : (
              <CancelIcon style={{ marginRight: 10 }} />
            )}
            <Text
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={styles.text}
            >
              Anonymous
            </Text>
          </View>
        </View>
        <View style={[styles.blockContainer, { marginTop: 10 }]}>
          <View style={styles.itemContainer}>
            {threat.is_known_attacker ? (
              <DangerIcon style={{ marginRight: 10 }} />
            ) : (
              <CancelIcon style={{ marginRight: 10 }} />
            )}
            <Text style={styles.text}>Attacker</Text>
          </View>
          <View style={styles.itemContainer}>
            {threat.is_known_abuser ? (
              <DangerIcon style={{ marginRight: 10 }} />
            ) : (
              <CancelIcon style={{ marginRight: 10 }} />
            )}
            <Text style={styles.text}>Abuser</Text>
          </View>
          <View style={styles.itemContainer}>
            {threat.is_threat ? (
              <DangerIcon style={{ marginRight: 10 }} />
            ) : (
              <CancelIcon style={{ marginRight: 10 }} />
            )}
            <Text style={styles.text}>Threat</Text>
          </View>
        </View>
        <View style={[styles.blockContainer, { marginTop: 10 }]}>
          <View style={styles.itemContainer}>
            {threat.is_datacenter ? (
              <DangerIcon style={{ marginRight: 10 }} />
            ) : (
              <CancelIcon style={{ marginRight: 10 }} />
            )}
            <Text style={styles.text}>Data Center</Text>
          </View>
        </View>
        {threat.additional_info?.length > 0 && (
          <View
            style={[
              styles.blockContainer,
              { marginTop: 10, flexDirection: "column" },
            ]}
          >
            <Text style={styles.text}>ADDİTİONAL INFO</Text>
            {threat.additional_info.map((url, index) => (
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={{ color: "#6cb7f5", fontWeight: "300", marginTop: 5 }}
                key={index}
                onPress={() => Linking.openURL(url)}
              >
                {url}
              </Text>
            ))}
          </View>
        )}
        {threat.blocklists?.length > 0 && (
          <>
            <View style={styles.blockContainer}>
              <View style={styles.blockHeader}>
                <InfoIcon style={styles.blockHeaderIcon} />
                <Text style={styles.textHead}>BLOCKLİSTS</Text>
              </View>
            </View>
            <View style={styles.HR}></View>
            {threat.blocklists.map((block, index) => (
              <BlockInfoComp key={index} block={block} />
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  blockHeaderIcon: {
    marginRight: 5,
  },
  blockHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  HR: {
    flex: 1,
    backgroundColor: "#ffffff1a",
    width: "90%",
    height: 1,
    marginBottom: 15,
  },
  textHead: {
    color: "#ffffff80",
    fontWeight: "300",
    textTransform: "uppercase",
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  blockContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 5,
    overflow: "hidden",
    marginTop: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    flex: 1,
    color: "#ffffff80",
    fontWeight: "200",
    textTransform: "uppercase",
  },
});

export default ThreatsPage;
