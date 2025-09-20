import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="starter" />
      <Stack.Screen name="login" />
      <Stack.Screen name="no-access" />
    </Stack>
  );
}
