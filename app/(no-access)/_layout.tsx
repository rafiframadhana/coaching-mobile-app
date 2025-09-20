import { Stack } from "expo-router";

export default function NoAccessLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="no-access" />
    </Stack>
  );
}
