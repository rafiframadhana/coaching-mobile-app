import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";

import {
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Subtask = {
  id: string;
  title: string;
};

type TaskData = {
  title: string;
  description: string;
  subtasks: Subtask[];
};

// Mock task data
const mockTaskData: Record<string, TaskData> = {
  "1": {
    title: "Update Resume for Australian Format",
    description:
      "Adapt your resume to meet Australian employment standards. Focus on highlighting relevant skills, achievements, and experience that align with Australian workplace expectations.",
    subtasks: [
      { id: "1-1", title: "Research Australian resume format" },
      { id: "1-2", title: "Update contact information" },
      { id: "1-3", title: "Rewrite work experience section" },
      { id: "1-4", title: "Add relevant skills section" },
      { id: "1-5", title: "Get resume reviewed by professional"},
      { id: "1-6", title: "Research Australian resume format"},
      { id: "1-7", title: "Update contact information" },
      { id: "1-8", title: "Rewrite work experience section" },
      { id: "1-9", title: "Add relevant skills section" },
      { id: "1-10", title: "Get resume reviewed by professional" },
    ],
  },
};

const TaskDetail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const taskData = mockTaskData[id as string] || mockTaskData["1"];

  const renderSubtaskItem = ({ item }: { item: Subtask }) => (
    <TouchableOpacity
      onPress={() => router.push(`/tasks/${id}/subtask/${item.id}`)}
      className="bg-white rounded-lg p-4 mb-3 shadow-sm flex-row items-center"
    >
      <View
        className="w-6 h-6 border-2 rounded-full mr-3 items-center justify-center
        border-gray-300"
      ></View>
      <Text className="flex-1 font-medium text-gray-800">{item.title}</Text>
      <Text className="text-gray-400 text-lg ml-2">›</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="bg-white mx-4 mt-4 rounded-lg p-6 shadow-sm">
          <Text className="text-2xl font-bold text-gray-800 mb-4">
            {taskData.title}
          </Text>
          <Text className="text-gray-600 leading-6">
            {taskData.description}
          </Text>
        </View>

        {/* Subtasks */}
        <View className="mx-4 mt-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">Subtasks</Text>

          <FlatList
            data={taskData.subtasks}
            renderItem={renderSubtaskItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>

      {/* Sticky Action Button */}
      <View className="bg-gray-50 px-4 pb-10 pt-2">
        <TouchableOpacity className="bg-blue-600 rounded-lg py-4 items-center">
          <Text className="text-white font-semibold text-lg">
            Mark Task Complete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskDetail;
