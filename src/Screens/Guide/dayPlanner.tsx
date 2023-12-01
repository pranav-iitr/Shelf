import { View, Text } from 'react-native'
import React from 'react'
import StatusBar from '../../Components/statusBar'
import ThunderIcon from '../../icons/ThunderCloudeIcon'
import SunCloudeIcon from '../../icons/SunCloudeIcon'
import MoonCloudeIcon from '../../icons/MoonCloudeIcon'
import MoonWindIcon from '../../icons/MoonWindIcon'
const DayPlanner = ({time=12}) => {
  return (
    <View style={{height:"100%",width:"100%",alignItems:"center"}} >
      <StatusBar  arr ={ [
    {ts: '00:00', location: 'Maldives', task: 'Save the Turtles',icon:<MoonCloudeIcon/>},
    {ts: '08:00', location: 'Maldives', task: 'Save the Turtles',icon:<ThunderIcon/>},
    {ts: '16:00', location: 'Maldives', task: 'Save the Turtles',icon:<MoonWindIcon/>},
    {ts: '23:59', location: 'Maldives', task: 'Save the Turtles',icon:<SunCloudeIcon/>},
  ]}
  x={time} />
    </View>
  )
}

export default DayPlanner