import {
  Linking,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinkIcon } from "../assets/Icons";

function BlockInfoComp({ block }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerBlock}>
        <View style={styles.itemContainer}>
          <Text style={styles.textHead}>NAME</Text>
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={styles.textContent}
          >
            {block.name}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.textHead}>TYPE</Text>
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={styles.textContent}
          >
            {block.type}
          </Text>
        </View>
      </View>
      <View style={styles.containerBlock}>
        <View style={styles.itemContainer}>
          <Text style={styles.textHead}>SİTE</Text>

          <View style={styles.iconTextContainer}>
            <LinkIcon style={{ marginRight: 5 }} />
            <Text
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={styles.textLink}
              onPress={() => Linking.openURL(block.site)}
            >
              {block.site}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "90%",
    backgroundColor: "#262c40",
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
  },
  containerBlock: {
    flexDirection: "row",
    alignContent: "space-around",
    marginBottom: 5,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "column",
  },
  textHead: {
    color: "#ffffff80",
    fontWeight: "200",
    textTransform: "uppercase",
  },
  textContent: {
    color: "white",
    fontSize: 17,
    lineHeight: 38,
    fontWeight: "200",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
  },
  textLink: {
    color: "#6cb7f5",
  },
});

export default BlockInfoComp;
