import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-black" edges={["top"]}>
      <View className="flex-1 justify-center bg-gray-50 px-6 py-12">
        {/* Welcome Section */}
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-gray-800 mb-2">Hello!</Text>
        </View>

        {/* Quick Stats */}
        <View className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Today Overview
          </Text>

          <View className="flex-row justify-around">
            <View className="items-center">
              <Text className="text-2xl font-bold text-blue-600">5</Text>
              <Text className="text-gray-500 text-sm">Tasks</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-green-600">3</Text>
              <Text className="text-gray-500 text-sm">Completed</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-yellow-500">2</Text>
              <Text className="text-gray-500 text-sm">Pending</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
