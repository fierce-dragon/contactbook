/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,

  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/Navigation';



const App =  () => {

  return (

   
      <NavigationContainer>
    <Navigation/>
    </NavigationContainer>

  );
};


export default App;
