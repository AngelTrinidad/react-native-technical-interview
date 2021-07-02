import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import Library from '@screens/Library';

const StackNavigator = createStackNavigator();

function AppNavigator() {
  return (
    <StackNavigator.Navigator headerMode="none" mode="card">
      <StackNavigator.Screen name={Routes.LIBRARY} component={Library} />
    </StackNavigator.Navigator>
  );
}

export default AppNavigator;
