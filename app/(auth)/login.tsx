import React, { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("password");
  const { login } = useAuth();

  const handleLogin = () => {
    const success = login(email, password);
    if (!success) {
      Alert.alert("Login Failed", "Invalid email or password");
    }
    // If successful, AuthGuard will automatically redirect to /(tabs)
  };

  return (
    <View className="flex-1 justify-center items-center px-6 bg-gray-50">
      <View className="w-full max-w-sm">
        <Text className="text-3xl font-bold text-center mb-8 text-gray-800">
          Welcome Back!
        </Text>
        
        <View className="mb-4">
          <Text className="text-gray-700 mb-2">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            className="bg-white rounded-lg px-4 py-3 border border-gray-200"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="mb-6">
          <Text className="text-gray-700 mb-2">Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            className="bg-white rounded-lg px-4 py-3 border border-gray-200"
            secureTextEntry
          />
        </View>

        <Pressable 
          onPress={handleLogin}
          className="bg-blue-600 rounded-lg py-4 items-center"
        >
          <Text className="text-white font-semibold text-lg">Login</Text>
        </Pressable>

        <Text className="text-center mt-4 text-gray-500 text-sm">
          Test: johndoe@example.com / password
        </Text>
      </View>
    </View>
  );
};

export default Login;
