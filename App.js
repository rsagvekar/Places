import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/Store';
import Navigation from './src/navigation/Navigation';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-get-random-values';


const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    {/* <Text>hello</Text> */}
  </Provider>
);

export default App;
