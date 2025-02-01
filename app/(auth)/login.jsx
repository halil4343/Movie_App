import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import styled from 'styled-components/native';
import CustomButton from '../../components/customButton';
import {
  Container,
  CenteredView,
  Title,
  InputContainer,
  Label,
  Input,
  FooterText,
  FooterLink
} from '../../assets/styles/style'; 


const Login = () => {
  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <Container>
          <CenteredView>
            <Title>Sign In to M-Series</Title>
          </CenteredView>
          <InputContainer>
            <Label>Email</Label>
            <Input placeholder="example@email.com" placeholderTextColor="#666" />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input secureTextEntry placeholderTextColor="#666" />
          </InputContainer>
        
            <CustomButton title="Sign In" href="/(tabs)/homeScreen" width="80%" margin="1px" />
          <FooterText>
            Don't have an account?{' '}
            <FooterLink href="/signup">Sign up</FooterLink>
          </FooterText>
        </Container>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Login;