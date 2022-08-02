import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { SearchIcon } from "../assets/Icons";
import { QueryData } from "../utils";

function SearchComp() {
  const [search, setSearch] = useState("");
  const funcLookUp = () => {
    QueryData(search);
  };
  return (
    <View style={styles.search}>
      <SearchIcon style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="IPv4 or IPv6 Address"
        value={search}
        placeholderTextColor={"#ffffff80"}
        onChangeText={(text) => setSearch(text)}
      />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#ffffff40"
        style={styles.searchButton}
        onPress={funcLookUp}
      >
        <Text style={{ color: "white", fontWeight: "200" }}>Lookup</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  searchIcon: {
    position: "absolute",
    fontWeight: "bold",
    left: 15,
    zIndex: 1,
  },
  searchInput: {
    width: "90%",
    color: "white",
    backgroundColor: "#ffffff0d",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
    zIndex: 1,
  },
  searchButton: {
    position: "absolute",
    backgroundColor: "#ffffff1a",
    padding: 10,
    borderRadius: 10,
    right: 15,
    zIndex: 5,
  },
});

export default SearchComp;
