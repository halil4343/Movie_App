import { Tabs } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="homeScreen" 
        options={{ 
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="wishlist" 
        options={{ 
          title: "Wishlist",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }} 
      />
    </Tabs>
  );
}