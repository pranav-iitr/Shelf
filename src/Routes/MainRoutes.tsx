
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Wallet from '../Screens/Wallet';
import Chart from '../Screens/Chart';
import Guide from '../Screens/Guide/Guide';
import HomeIcon from '../icons/HomeIcon';
import WalletIcon from '../icons/WalletIcon';
import GuideIcon from '../icons/GuideIcon';
import ChartIcon from '../icons/ChartIcon';

const Stack = createBottomTabNavigator();

const MainRoutes = () => {
  return (
    <>
      {/* <NavigationContainer> */}

      <Stack.Navigator
        initialRouteName="Home"
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
              return <HomeIcon fill={color} />;
            },
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Wallet" options={{
            tabBarIcon: ({color, size}) => {
              return <WalletIcon fill={color} />;
            },
          }} component={Wallet} />
        <Stack.Screen name="Guide" options={{
            tabBarIcon: ({color, size}) => {
              return <GuideIcon fill={color} />;
            },
          }} component={Guide} />
        <Stack.Screen name="Chart"  options={{
            tabBarIcon: ({color, size}) => {
              return <ChartIcon fill={color} />;
            },
          }} component={Chart} />
      </Stack.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
};

export default MainRoutes;
