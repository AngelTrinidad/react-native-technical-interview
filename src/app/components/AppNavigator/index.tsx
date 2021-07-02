import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import Library from '@screens/Library';
import { DEFAULT_OPTIONS } from '@constants/navigator';

const StackNavigator = createStackNavigator();

function AppNavigator() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name={Routes.LIBRARY}
        component={Library}
        options={{
          ...DEFAULT_OPTIONS,
          title: 'LIBRARY'
        }}
      />
    </StackNavigator.Navigator>
  );
}

export default AppNavigator;
