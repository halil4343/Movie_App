import { View, Text, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Signup = () => {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View>
          <Text>Sign Up to M-Series</Text>
        </View>
        <View>
          <Text>Email </Text>
          <TextInput placeholder='example@email.com'/>
        </View>
        <View>
          <Text>Create Your Password</Text>
          <TextInput secureTextEntry/>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Signup;