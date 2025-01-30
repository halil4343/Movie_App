import { Stack } from "expo-router";
import React from 'react';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)/homeScreen" 
        options={{ 
          title: "Home",
        }} 
      />
      <Stack.Screen 
        name="(tabs)/profile" 
        options={{ 
          title: "Profile",
        }} 
      />
      <Stack.Screen 
        name="(tabs)/wishlist" 
        options={{ 
          title: "Wishlist",
        }} 
      />
    </Stack>
  );
}