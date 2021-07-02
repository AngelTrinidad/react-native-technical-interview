import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import { DEFAULT_OPTIONS } from '@constants/navigator';
import Library from '@app/screens/Library/Library';

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
