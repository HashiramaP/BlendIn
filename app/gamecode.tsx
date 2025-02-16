import React from "react";
import { Text, View, Button, TextInput } from "react-native";
import { useFonts, DynaPuff_400Regular } from "@expo-google-fonts/dynapuff";
import AppLoading from "expo-app-loading";
import { Link } from "expo-router";

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
        alignItems: "center" as const,
        backgroundColor: "#a800c9",
      }}
    >
      <Text style={styles.title} onPress={() => alert("Hello World!")}>
        Blend In
      </Text>
      <View style={styles.send}>
        <TextInput
          style={styles.input}
          placeholder="Enter Game Code"
          placeholderTextColor="#fff"
        />
        <Link href="/name" style={styles.button}>
          Find Game
        </Link>
      </View>
    </View>
  );
}

const styles = {
  title: {
    fontSize: 48,
    color: "#fff",
    fontFamily: "DynaPuff_400Regular",
    position: "absolute" as "absolute",
    top: 75,
  },
  input: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "DynaPuff_400Regular",
    borderColor: "#2f0136",
    borderWidth: 4,
    borderRadius: 10,
    backgroundColor: "#7e018f",
    width: 300,
    padding: 10,
    marginBottom: 10,
  },
  send: {
    position: "absolute" as "absolute",
    top: 250,
    alignItems: "center" as const,
  },
  button: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "DynaPuff_400Regular",
    backgroundColor: "black",
    width: 300,
    padding: 10,
    textAlign: "center" as "center",
    margin: 10,
    borderColor: "#2f0136",
    borderWidth: 4,
    borderRadius: 10,
  },
};
