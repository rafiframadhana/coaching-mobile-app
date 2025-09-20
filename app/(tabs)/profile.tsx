import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const { logout } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-black" edges={["top"]}>
      <View className="flex-1 bg-gray-50 justify-between px-6 py-12">
        {/* Profile Section */}
        <View className="items-center">
          {/* Profile Picture */}
          <View className="w-24 h-24 bg-blue-600 rounded-full items-center justify-center mb-6">
            <Text className="text-3xl font-bold text-white">JD</Text>
          </View>

          {/* Name */}
          <Text className="text-2xl font-bold text-gray-800 mb-2">
            John Doe
          </Text>

          {/* Email */}
          <Text className="text-gray-600">johndoe@example.com</Text>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity
          className="bg-red-500 rounded-lg py-4 items-center"
          onPress={logout}
        >
          <Text className="text-white font-semibold text-lg">Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
