import { View, Text, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Link, useNavigation } from 'expo-router';
import styled from 'styled-components/native';
import CustomButton from '../components/customButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Container,
  CenteredView,
  Title,
  InputContainer,
  Label,
  Input,
  FooterText,
  FooterLink
} from '../assets/styles/style'; 



const Onboarding = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <SafeAreaProvider>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <Container>
              <CenteredView>
                <Title>Welcome to M-Series</Title>
              </CenteredView>
                  <CustomButton title="Get Started" href="(auth)/login" width="85%"/>
            </Container>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Onboarding;