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
