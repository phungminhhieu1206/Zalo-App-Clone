import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigation from './AuthNavigation';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { SignedInStack, SignedOutStack } from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <AuthNavigation colorScheme={colorScheme} /> */}
        <SignedInStack colorScheme={colorScheme} />


        {/* Login - Signup - Logout */}

        {/* <SignedOutStack/> */}
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
