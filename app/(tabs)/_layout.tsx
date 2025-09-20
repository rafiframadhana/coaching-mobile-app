import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const MainLayout = () => {
  return (
    <SafeAreaView className="flex-1 bg-black" edges={["bottom"]}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            height: 75,
            paddingBottom: 0,
            paddingTop: 8,
          },
          tabBarActiveTintColor: '#3B82F6',
          tabBarInactiveTintColor: '#6B7280',
        }}
      >
        <Tabs.Screen 
          name="index" 
          options={{ 
            title: "Overview",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons 
                name={focused ? "home" : "home-outline"} 
                size={24} 
                color={color} 
              />
            )
          }} 
        />
        <Tabs.Screen 
          name="tasks" 
          options={{ 
            title: "Tasks",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons 
                name={focused ? "list" : "list-outline"} 
                size={24} 
                color={color} 
              />
            )
          }} 
        />
        <Tabs.Screen 
          name="profile" 
          options={{ 
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons 
                name={focused ? "person" : "person-outline"} 
                size={24} 
                color={color} 
              />
            )
          }} 
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default MainLayout;
