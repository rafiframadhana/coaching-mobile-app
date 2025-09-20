import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

const NoAccess = () => {
  const { logout } = useAuth();

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 px-10">
      <Text className="text-3xl font-bold text-gray-800 text-center mb-4">
        Hi There!
      </Text>

      <Text className="text-gray-600 text-xl text-center mb-6">
        Unfortunately you are not a coaching participant. Contact us to be
        coaching participant.
      </Text>

      <View className="flex-row justify-center items-center mb-4 gap-6">
        <Link
          href="https://google.com"
          className="bg-blue-500 py-3 px-6 rounded-lg items-center"
        >
          <Text className="text-white font-semibold">Contact Us</Text>
        </Link>

        <TouchableOpacity
          onPress={logout}
          className="bg-red-500 py-3 px-6 rounded-lg items-center"
        >
          <Text className="text-white font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoAccess;
