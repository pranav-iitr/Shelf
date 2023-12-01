import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Wallet from '../Screens/Wallet';
import Chart from '../Screens/Chart';
import Guide from '../Screens/Guide/Guide';

// import HomeIcon from "../icons/HomeIcon"
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createBottomTabNavigator();

const MainRoutes = () => {
  return (
    <>
      {/* <NavigationContainer> */}

      <Stack.Navigator
        initialRouteName="Guide"
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            height: 70,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
        }}>
        <Stack.Screen
          options={{
            tabBarIcon: ({color, size}) => {
              return <Icon name="rocket" size={30} color="#900" />;
            },
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Guide" component={Guide} />
        <Stack.Screen name="Chart" component={Chart} />
      </Stack.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
};

export default MainRoutes;
