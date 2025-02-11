import React, { forwardRef } from 'react';
import { Pressable, Text } from 'react-native';
import styled from 'styled-components/native';
import { Link } from 'expo-router';

const primary = "#7dff50";
const secondary = "#fc0054";

const StyledButton = styled(Pressable)`
  background-color: ${props => (props.pressed ? primary : '#9dff80')};
  padding: ${props => (props.pressed ? '15px 30px' : '10px 20px')};
  border-radius: 20px; /* Increased border-radius for a more rounded border */
  border-width: 2px;
  border-color: ${secondary};
  width: ${props => props.width || '200px'}; /* Use width prop or default to 200px */
  transform: ${props => (props.pressed ? 'scale(1.1)' : 'scale(1)')}; /* Scale evenly when pressed */
`;
const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px; /* Less padding */
  margin: 5px; /* Less margin */
`;
const ButtonText = styled(Text)`
  color: ${secondary};
  font-size: 16px;
  font-weight: bold;
  align-self: center;
`;

const CustomButton = forwardRef(({ onPress, title, href, width, margin }, ref) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const buttonContent = (
    <StyledButton
      ref={ref}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      pressed={isPressed}
      onPress={onPress}
      width={width}
      margin={margin}
    >
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );

  return (
    <ButtonContainer>
      {href ? (
        <Link href={href} asChild>
          {buttonContent}
        </Link>
      ) : (
        buttonContent
      )}
    </ButtonContainer>
  );
});

export default CustomButton;