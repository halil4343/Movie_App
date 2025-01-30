import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import './app/global.css';

// This handles the splash screen and rotation
export default function App() {
  return <ExpoRoot />;
}

registerRootComponent(App);