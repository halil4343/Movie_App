import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { ExpoRoot } from 'expo-router';
import { GlobalProvider } from './components/GlobalProvider';
import './app/global.css';

function App() {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <ExpoRoot />
      </GlobalProvider>
    </NavigationContainer>
  );
}

registerRootComponent(App);