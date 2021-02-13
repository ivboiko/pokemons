import React from 'react';
import { StatusBar } from 'react-native';
import TabNavigator from './src/components/navigation/TabNavigator';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <TabNavigator />
  </>
);

export default App;
