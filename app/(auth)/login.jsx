// filepath: /c:/Users/Ozerh/Desktop/Software Develpment/m-series/m-series/app/(auth)/login.jsx
import { View, Text, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: black;
  padding: 16px;
`;

const CenteredView = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const InputContainer = styled.View`
  margin-bottom: 16px;
`;

const Label = styled.Text`
  color: white;
  margin-bottom: 8px;
`;

const Input = styled.TextInput`
  background-color: #333;
  color: white;
  padding: 16px;
  border-radius: 8px;
`;

const FooterText = styled.Text`
  color: white;
  text-align: center;
  margin-top: 24px;
`;

const FooterLink = styled(Link)`
  color: blue;
`;

const Login = () => {
  return (
    <SafeAreaProvider>
      <ScrollView>
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