import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import screens from './screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        {screens.map((screen) => (
          <Stack.Screen {...screen} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
