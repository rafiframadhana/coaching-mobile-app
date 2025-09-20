import starterBg from "@/assets/images/starter-screen-template.jpg";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";


const StarterScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground source={starterBg} className="flex-1" resizeMode="cover">
        {/* Overlay */}
        <View className="flex-1 bg-black/40">
          {/* Main content */}
          <View className="flex-1 items-center px-6">
            <View className="items-start mb-16 mt-80">
              {/* Main heading */}
              <Text className="text-white/80 text-2xl font-bold mb-4 leading-tight">
                Coaching App Demo
              </Text>

              {/* Subtext */}
              <Text className="text-white text-[30px] font-semibold leading-relaxed">
                Your Journey
                <Text className="text-[#FFC800]"> Starts </Text>
                Here
              </Text>
            </View>

            {/* Bottom section with placeholder images */}
            <View className="absolute bottom-32 left-6 right-6">
              <TouchableOpacity className="bg-white flex-row items-center justify-center py-4 rounded-full" onPress={()=> router.navigate("/login")}>
                <Text className="text-black text-lg font-semibold">
                  Start Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StarterScreen;
