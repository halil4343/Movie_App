import styled from 'styled-components/native';
import { Link } from 'expo-router';

export const Container = styled.View`
  flex: 1;
  background-color: #4d0239;
  padding: 16px;
  justify-content: center;
`;

export const CenteredView = styled.View`
background-color: #4d0239;
  align-items: center;
  justify-content: center;
  padding-top: 20px; /* Adjusted padding */
  padding-bottom: 20px; /* Adjusted padding */
`;
export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px; /* Less padding */
  margin: 5px; /* Less margin */
`;


export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const InputContainer = styled.View`
  background-color: #4d0239;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  color: white;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  background-color: #333;
  color: white;
  padding: 16px;
  border-radius: 8px;
`;

export const FooterText = styled.Text`
  color: white;
  text-align: center;
  margin-top: 24px;
`;

export const FooterLink = styled(Link)`
  color: blue;
`;