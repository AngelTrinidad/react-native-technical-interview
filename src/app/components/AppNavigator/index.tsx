import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import { DEFAULT_OPTIONS } from '@constants/navigator';
import Library from '@app/screens/Library/Library';
import BookDetail from '@app/screens/BookDetail/BookDetail';

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
      <StackNavigator.Screen
        name={Routes.BOOK_DETAIL}
        component={BookDetail}
        options={{
          ...DEFAULT_OPTIONS,
          title: 'Book Detail'
        }}
      />
    </StackNavigator.Navigator>
  );
}

export default AppNavigator;
