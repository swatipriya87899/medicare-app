import React from 'react';
import Home from './src/screens/Home';
import Map from './src/screens/Map';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import LeftDrawer from './src/components/LeftDrawer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <LeftDrawer>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="home"
              component={Home}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </LeftDrawer>
    </Provider>
  );
};

export default App;
