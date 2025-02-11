import { Stack } from "expo-router";
import React from 'react';
import { GlobalProvider } from '../components/GlobalProvider';
export default function Layout() {
  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </GlobalProvider>
  );
}