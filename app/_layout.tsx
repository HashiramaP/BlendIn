import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {" "}
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="gamecode" options={{ title: "Gamecode" }} />
      <Stack.Screen name="name" options={{ title: "Name" }} />
    </Stack>
  );
}
