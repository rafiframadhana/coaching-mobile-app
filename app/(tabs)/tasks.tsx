import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock Data
const mockCoach = {
  name: "Steve",
  initials: "S",
  specialty: "Your Coach",
};

const mockTasks = [
  { id: "1", title: "Update Resume for Australian Format" },
  { id: "2", title: "Research Visa Requirements" },
  { id: "3", title: "Complete English Proficiency Test" },
  { id: "4", title: "Apply for Skills Assessment" },
  { id: "5", title: "Network with Australian Professionals" },
  { id: "6", title: "Practice Interview Skills" },
  { id: "7", title: "Research Cost of Living in Sydney" },
  { id: "8", title: "Prepare Portfolio for Job Applications" },
  { id: "9", title: "Connect with Recruitment Agencies" },
  { id: "10", title: "Study Australian Workplace Culture" },
  { id: "11", title: "Complete LinkedIn Profile Optimization" },
  { id: "12", title: "Research Industry Trends in Australia" },
  { id: "13", title: "Plan Accommodation Strategy" },
];

type TaskItem = {
  id: string;
  title: string;
};

const Tasks = () => {
  const router = useRouter();

  const renderTaskItem = ({ item }: { item: TaskItem }) => (
    <TouchableOpacity
      onPress={() => router.push(`/tasks/${item.id}`)}
      className="bg-white rounded-lg py-6 px-4 mb-3 shadow-sm flex-row items-center">
      <View className="w-6 h-6 border-2 border-gray-300 rounded-full mr-3 items-center justify-center">
        <View className="w-3 h-3 bg-transparent rounded-full" />
      </View>
      <Text className="text-gray-800 font-medium flex-1">{item.title}</Text>
      <Text className="text-gray-400 text-lg ml-2">›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-black" edges={["top"]}>
      <View className="flex-1 bg-gray-50">
        {/* Coach Card */}
        <View className="bg-white mx-4 mt-4 rounded-lg p-6 shadow-sm">
          <View className="flex-row items-center mb-4">
            {/* Coach Image/Avatar */}
            <View className="w-16 h-16 bg-blue-600 rounded-full items-center justify-center mr-4">
              <Text className="text-2xl font-bold text-white">
                {mockCoach.initials}
              </Text>
            </View>

            {/* Coach Info */}
            <View className="flex-1">
              <Text className="text-xl font-bold text-gray-800">
                {mockCoach.name}
              </Text>
              <Text className="text-gray-600">{mockCoach.specialty}</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View className="flex-row justify-around">
            <TouchableOpacity className="bg-blue-50 rounded-lg px-4 py-3 items-center flex-1 mr-2">
              <Text className="text-2xl mb-1">📅</Text>
              <Text className="text-blue-800 text-sm font-medium">
                Calendar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-green-50 rounded-lg px-4 py-3 items-center flex-1 mx-1">
              <Text className="text-2xl mb-1">💬</Text>
              <Text className="text-green-800 text-sm font-medium">
                Message
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-red-50 rounded-lg px-4 py-3 items-center flex-1 ml-2">
              <Text className="text-2xl mb-1">🚨</Text>
              <Text className="text-red-800 text-sm font-medium">Urgent</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tasks Section */}
        <View className="flex-1 px-4 mt-6">
          <Text className="text-2xl font-bold text-gray-800 mb-4">Tasks</Text>

          <FlatList
            data={mockTasks}
            renderItem={renderTaskItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tasks;
