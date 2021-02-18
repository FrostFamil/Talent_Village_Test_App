import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderRight from './src/components/HeaderLayout/HeaderRight';
import HeaderLeft from './src/components/HeaderLayout/HeaderLeft';
import HeaderTitle from './src/components/HeaderLayout/HeaderTitle';

import HomeScreen from './src/screens/HomeScreen';
import themeStyle from './src/styles/theme.style';
import { HOME_SCREEN_NAME } from './src/utils/ConstantValues';

const Stack = createStackNavigator();


function AppNavigator() {
    return (
      <Stack.Navigator
        initialRouteName={HOME_SCREEN_NAME}
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name={HOME_SCREEN_NAME}
          component={HomeScreen}
          options={{ 
              title: '',
              headerTitle: props => <HeaderTitle/>,
              headerRight: props => <HeaderRight/>,
              headerStyle: {
                backgroundColor: themeStyle.PRIMARY_COLOR
              }
          }}
        />
      </Stack.Navigator>
    );
  }

export default AppNavigator;
