import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './Home';
import FullImage from './FullImage/FullImage';

export type RootStackParamsList = {};

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={Home} />
        <Stack.Screen name="Full Image" component={FullImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
