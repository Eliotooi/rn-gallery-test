import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { PATH } from './constants';
import { GalleryScreen } from '../screens/GalleryScreen';
import { PhotoViewScreen } from '../screens/PhotoViewScreen';

export type RootStackParamsList = {
  [PATH.GALLERY]: undefined;
  [PATH.PHOTO_VIEW]: {
    imageURI: string;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={PATH.GALLERY}>
        <RootStack.Screen
          name={PATH.GALLERY}
          component={GalleryScreen}
          options={{
            title: 'Gallery',
          }}
        />
        <RootStack.Screen
          name={PATH.PHOTO_VIEW}
          component={PhotoViewScreen}
          options={{
            title: 'Photo Detailed',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
