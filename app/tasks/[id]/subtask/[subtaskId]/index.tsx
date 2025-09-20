import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

// Mock subtask data
const mockSubtaskData: Record<string, { title: string; description: string }> =
  {
    "1-1": {
      title: "Research Australian Resume Format",
      description:
        "Study the standard Australian resume format including layout, sections, and key differences from other international formats. Focus on chronological order, contact details placement, and professional summary structure.",
    },
  };

const SubtaskDetail = () => {
  const { subtaskId } = useLocalSearchParams();
  const subtaskData =
    mockSubtaskData[subtaskId as string] || mockSubtaskData["1-1"];

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="bg-white mx-4 mt-4 rounded-lg p-6 shadow-sm">
          <Text className="text-2xl font-bold text-gray-800 mb-4">
            {subtaskData.title}
          </Text>
          <Text className="text-gray-600 leading-6">
            {subtaskData.description}
          </Text>
        </View>
      </ScrollView>

      {/* Sticky Action Button */}
      <View className="bg-gray-50 px-4 pb-10 pt-2">
        <TouchableOpacity className="rounded-lg py-4 items-center bg-blue-600">
          <Text className="text-white font-semibold text-lg">
            Mark as Complete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubtaskDetail;
