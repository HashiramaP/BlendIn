import React from "react";
import { Text, View, Button } from "react-native";
import { useFonts, DynaPuff_400Regular } from "@expo-google-fonts/dynapuff";
import AppLoading from "expo-app-loading";

export default function Index() {
  let [fontsLoaded] = useFonts({
    DynaPuff_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a800c9",
      }}
    >
      <Text style={styles.title} onPress={() => alert("Hello World!")}>
        Blend In
      </Text>
      <View style={{ height: 100 }}>
        <Text style={styles.button} onPress={() => alert("code here")}>
          Join Game
        </Text>
        <Text style={styles.button} onPress={() => alert("game hosted")}>
          Host Game
        </Text>
      </View>
    </View>
  );
}

const styles = {
  title: {
    fontSize: 64,
    color: "#fff",
    fontFamily: "DynaPuff_400Regular",
    position: "absolute",
    top: 200,
  },
  button: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "DynaPuff_400Regular",
    backgroundColor: "#7e018f",
    width: 250,
    padding: 10,
    textAlign: "center" as "center",
    margin: 10,
    borderColor: "#2f0136",
    borderWidth: 4,
    borderRadius: 10,
  },
};
