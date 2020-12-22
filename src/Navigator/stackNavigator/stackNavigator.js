import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenOne, ScreenTwo, ScreenThree} from '../../Screens';

const StackNavigator = createStackNavigator ();

export default function Stack () {
  return (
    <StackNavigator.Navigator initialRouteName="ScreenOne">

      <StackNavigator.Screen
        name="ScreenOne"
        component={ScreenOne}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ScreenTwo"
        component={ScreenTwo}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ScreenThree"
        component={ScreenThree}
        options={{headerShown: false}}
      />

    </StackNavigator.Navigator>
  );
}
