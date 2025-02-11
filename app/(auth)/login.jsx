import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';
import CustomButton from '../../components/customButton';
import { useGlobalContext } from '../../components/GlobalProvider';
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
  const { userLogin } = useGlobalContext();
  const router = useRouter();

  const handleLogin = async () => {
    const result = await userLogin();
    if (result) {
      router.push('/homeScreen');
    }
  };

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
        
          <CustomButton title="Sign In" onPress={handleLogin} width="80%" margin="1px" />
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