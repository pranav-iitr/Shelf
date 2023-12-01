import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import GuideRoutes from '../../Routes/GuideRoutes'

function getMonthAbbreviation(monthNumber:Int32) {
  const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  if (monthNumber >= 1 && monthNumber <= 12) {
      return months[monthNumber - 1];
  } else {
      return "Invalid month number";
  }
}


const Guide = ({navigation}:any) => {
  const [Today, setToday] = useState({})
  const [Yesterday, setYesterday] = useState("")
  const [Tommorow, setTommorow] = useState("")

  useEffect(() => {
    let now = new Date()
    let past = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    let future = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
    
  
    
    setToday(`${now.getUTCDate()} ${ getMonthAbbreviation(now.getMonth())}`)
    setYesterday(`${past.getUTCDate()} ${ getMonthAbbreviation(past.getMonth())}`)
    setTommorow(`${future.getUTCDate()} ${ getMonthAbbreviation(future.getMonth())}`)
  }, [])
  
  
  return (
    <>
    <GuideRoutes goBack={()=>{navigation.goBack()}} today={Today} yesterday={Yesterday} tommorow={Tommorow} />
    </>
  )
}

export default Guide