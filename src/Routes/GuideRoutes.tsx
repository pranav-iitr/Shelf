import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from '../Screens/Home';

// import HomeIcon from "../icons/HomeIcon"
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();

const GuideRoutes = ({
  today = '29 Nov',
  yesterday = '30 Nov',
  tommorow = '31 Nov',
}) => {
  return (
    <>
      <View style={{backgroundColor: '#fff', height: 120}}></View>

      <Tab.Navigator initialRouteName="Today" screenOptions={{}}>
        <Tab.Screen name="Yesterday" options={{
            tabBarLabel: () => {
              return (
                <View style={{justifyContent: 'center'}}>
                  <Text style={{ color:"#000" ,textAlign: 'center',fontSize:18,fontWeight:"600"}}>Yesterday</Text>
                  <Text style={{ color:"#B1B1B1",fontSize:16,fontWeight:"400", textAlign: 'center'}}>{yesterday}</Text>
                </View>
              );
            },
          }} component={Home} />
        <Tab.Screen
          name="Today"
          options={{
            tabBarLabel: () => {
              return (
                <View style={{justifyContent: 'center'}}>
                  <Text style={{ color:"#000" ,textAlign: 'center',fontSize:18,fontWeight:"600"}}>Today</Text>
                  <Text style={{ color:"#B1B1B1",fontSize:16,fontWeight:"400", textAlign: 'center'}}>{today}</Text>
                </View>
              );
            },
          }}
          component={Home}
        />
        <Tab.Screen name="Tommorow" options={{
            tabBarLabel: () => {
              return (
                <View style={{justifyContent: 'center'}}>
                  <Text style={{ color:"#000" ,textAlign: 'center',fontSize:18,fontWeight:"600"}}>Tommorow</Text>
                  <Text style={{ color:"#B1B1B1",fontSize:16,fontWeight:"400", textAlign: 'center'}}>{tommorow}</Text>
                </View>
              );
            },
          }} component={Home} />
      </Tab.Navigator>
    </>
  );
};

export default GuideRoutes;
