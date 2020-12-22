import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './stackNavigator';

export default function Navigation () {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
