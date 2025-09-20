# Expo Router Implementation Guide

This guide demonstrates how to implement the routing structure used in the coaching mobile app in your other React Native projects.

## Project Structure Overview

```
app/
├── _layout.tsx                 # Root layout with providers
├── global.css                  # Global styles
├── (auth)/                     # Authentication routes group
│   ├── _layout.tsx
│   ├── starter.tsx
│   └── login.tsx
├── (tabs)/                     # Main app tabs group  
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── tasks.tsx
│   └── profile.tsx
├── (no-access)/                # Restricted access group
│   ├── _layout.tsx
│   └── no-access.tsx
└── tasks/                      # Dynamic task routes
    ├── _layout.tsx
    └── [id]/
        ├── index.tsx
        └── subtask/
            └── [subtaskId]/
                └── index.tsx
```

## Key Implementation Steps

### 1. Install Dependencies

```bash
npm install expo-router react-native-safe-area-context
# For tab icons
npm install @expo/vector-icons
```

### 2. Root Layout Setup (`app/_layout.tsx`)

```tsx
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "../contexts/AuthContext";
import { useAuthGuard } from "../hooks/useAuthGuard";
import "./global.css";

function AppNavigator() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useAuthGuard(); // Custom hook for route protection
  
  if (!isMounted) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <Text>Loading...</Text>
      </View>
    );
  }
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(no-access)" />
      <Stack.Screen name="tasks" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
```

### 3. Route Groups with Parentheses

#### Authentication Group (`app/(auth)/_layout.tsx`)

```tsx
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="starter" />
      <Stack.Screen name="login" />
      <Stack.Screen name="no-access" />
    </Stack>
  );
}
```

#### Tabs Group (`app/(tabs)/_layout.tsx`)

```tsx
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
```

### 4. Dynamic Routes (`app/tasks/_layout.tsx`)

```tsx
import { Stack } from 'expo-router'
import React from 'react'

const TasksLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="[id]/index" options={{ title: "Task Detail" }} />
        <Stack.Screen name="[id]/subtask/[subtaskId]/index" options={{ title: "Subtask Detail" }} />
    </Stack>
  )
}

export default TasksLayout
```

### 5. Authentication Context (`contexts/AuthContext.tsx`)

```tsx
import React, { createContext, ReactNode, useContext, useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  isCoachingParticipant: boolean;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isCoachingParticipant: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    // Your login logic here
    if (password === 'password') {
      const isCoachingParticipant = email === 'admin@example.com';
      
      const mockUser: User = {
        id: '1',
        name: isCoachingParticipant ? 'Admin User' : 'Regular User',
        email: email,
        isCoachingParticipant,
      };
      
      setUser(mockUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isCoachingParticipant: user?.isCoachingParticipant ?? false,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

### 6. Route Protection Hook (`hooks/useAuthGuard.tsx`)

```tsx
import { useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export const useAuthGuard = () => {
  const { isAuthenticated, isCoachingParticipant } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const [isNavigationReady, setIsNavigationReady] = useState(false);

  // Wait for navigation to be ready
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavigationReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isNavigationReady) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (!isAuthenticated && !inAuthGroup) {
      router.replace('/(auth)/starter');
    } else if (isAuthenticated && inAuthGroup && segments[1] !== 'no-access') {
      if (!isCoachingParticipant) {
        router.replace('/(no-access)/no-access');
      } else {
        router.replace('/(tabs)');
      }
    } else if (isAuthenticated && !isCoachingParticipant && !inAuthGroup) {
      router.replace('/(no-access)/no-access');
    }
  }, [isAuthenticated, isCoachingParticipant, segments, router, isNavigationReady]);
};
```

## Key Features Explained

### 1. Route Groups with Parentheses
- `(auth)`, `(tabs)`, `(no-access)` - Groups routes without adding to URL path
- Allows organizing related screens while keeping clean URLs

### 2. Dynamic Routes
- `[id]` - Dynamic parameter for task ID
- `[subtaskId]` - Nested dynamic parameter for subtask ID
- Supports deep linking like `/tasks/123/subtask/456`

### 3. Layout Nesting
- Each `_layout.tsx` creates a layout boundary
- Child layouts inherit from parent layouts
- Enables consistent UI patterns per section

### 4. Authentication Flow
- Protected routes using `useAuthGuard` hook
- Role-based access with `isCoachingParticipant`
- Automatic redirects based on auth state

### 5. Tab Navigation
- Bottom tab navigation with icons
- Customizable styling and behavior
- Nested stack navigation within tabs

## Implementation Checklist

- [ ] Install expo-router and dependencies
- [ ] Create app directory structure
- [ ] Set up root layout with providers
- [ ] Implement authentication context
- [ ] Create route protection hook
- [ ] Configure route groups (auth, tabs, no-access)
- [ ] Set up tab navigation with icons
- [ ] Implement dynamic routes for detail screens
- [ ] Add global styles and theming
- [ ] Test navigation flows and route protection

## Common Patterns Used

1. **Provider Pattern** - Wrapping app in context providers
2. **Custom Hooks** - Reusable logic for auth guards
3. **Route Groups** - Organizing screens without URL nesting  
4. **Layout Nesting** - Hierarchical layout structure
5. **Dynamic Routes** - Parameter-based navigation
6. **Conditional Rendering** - Loading states and auth checks

This structure provides a scalable foundation for React Native apps with complex navigation requirements.