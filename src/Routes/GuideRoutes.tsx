import {View, Text ,TouchableOpacity} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { getScreenWidthPercentage } from '../Components/dimmensions';
import Home from '../Screens/Home';
import DayPlanner from '../Screens/Guide/dayPlanner';
import LeftIcon from '../icons/LeftIcon';

const Tab = createMaterialTopTabNavigator();

const GuideRoutes = ({today="1st dec", yesterday = '30 Nov', tommorow = '31 Nov',goBack}) => {
  let now = new Date();
  console.log("hours",today);
  return (
    <>
      <View
        style={{
          backgroundColor: '#fff',
          height: 120,
          alignContent: 'center',
          alignItems:'center',
          paddingHorizontal: 20,
          flexDirection:"row",
          width:getScreenWidthPercentage(100)
        }}>
        <TouchableOpacity onPress={()=>{goBack()}} >
          <LeftIcon /> 
        </TouchableOpacity>
        <Text style={{ textAlign:"center", marginLeft:-28 ,fontWeight:"600" ,color:"#000" , fontSize:24  , width:getScreenWidthPercentage(100)-48}} >Itinerary Form</Text>
      </View>

      <Tab.Navigator initialRouteName="Today" screenOptions={{}}>
        <Tab.Screen
          name="Yesterday"
          options={{
            tabBarLabel: () => {
              return (
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={{
                      color: '#000',
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: '600',
                    }}>
                    Yesterday
                  </Text>
                  <Text
                    style={{
                      color: '#B1B1B1',
                      fontSize: 16,
                      fontWeight: '400',
                      textAlign: 'center',
                    }}>
                    {yesterday}
                  </Text>
                </View>
              );
            },
          }}
          component={() => <DayPlanner time={24} />}
        />
        <Tab.Screen
          name="Today"
          options={{
            tabBarLabel: () => {
              return (
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={{
                      color: '#000',
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: '600',
                    }}>
                    Today
                  </Text>
                  <Text
                    style={{
                      color: '#B1B1B1',
                      fontSize: 16,
                      fontWeight: '400',
                      textAlign: 'center',
                    }}>
                      {console.log(today)}
                    {/* {today} */}
                  </Text>
                </View>
              );
            },
          }}
          component={() => <DayPlanner time={now.getHours()} />}
        />
        <Tab.Screen
          name="Tommorow"
          options={{
            tabBarLabel: () => {
              return (
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={{
                      color: '#000',
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: '600',
                    }}>
                    Tommorow
                  </Text>
                  <Text
                    style={{
                      color: '#B1B1B1',
                      fontSize: 16,
                      fontWeight: '400',
                      textAlign: 'center',
                    }}>
                    {tommorow}
                  </Text>
                </View>
              );
            },
          }}
          component={() => <DayPlanner time={0} />}
        />
      </Tab.Navigator>
    </>
  );
};

export default GuideRoutes;
