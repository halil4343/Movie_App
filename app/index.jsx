import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import styled from 'styled-components/native';

const primary = "#7dff50"
const secondary = "#fc0054"
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const StyledButton = styled(Pressable)`
  background-color: ${props => (props.pressed ? primary : '#9dff80')};
  padding: ${props => (props.pressed ? '15px 30px' : '10px 20px')};
  border-radius: 20px; /* Increased border-radius for a more rounded border */
  border-width : 2px;
  border-color : ${secondary};
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: ${secondary};
  font-size: 16px;
  font-weight: bold;
`;

const Onboarding = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const handleGetStarted = () => {
    navigation.navigate('(tabs)/homeScreen');
  };

  return (
    <Container>
      <Title>Welcome to M-Series</Title>
      <StyledButton
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        pressed={isPressed}
        onPress={handleGetStarted}
      >
        <ButtonText>Get Started</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default Onboarding;