import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link, useNavigation } from 'expo-router';
import styled from 'styled-components/native';
import CustomButton from '../components/customButton';
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

const ButtonWrapper = styled.View`
  height: 10%; /* Fixed height to prevent repositioning */
  justify-content: center;
  align-items: center;
`;

const Onboarding = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Container>
      <Title>Welcome to M-Series</Title>
      <ButtonWrapper>
        <CustomButton title="Get Started" href="(auth)/login"/>
      </ButtonWrapper>
    </Container>
  );
};

export default Onboarding;