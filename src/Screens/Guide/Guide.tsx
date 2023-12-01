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
  const [Today, setToday] = useState("")
  const [Yesterday, setYesterday] = useState("")
  const [Tommorow, setTommorow] = useState("")

  useEffect(() => {
    let Now = new Date()
    let past = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    let future = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
    // console.log("date",now.getMonth(),now)
    console.log("date",past.getMonth(),past)
    console.log("date",future)
  
    
    setToday(`${Now.getDate()} ${ getMonthAbbreviation(Now.getMonth()+1)}`)
    setYesterday(`${past.getDate()} ${ getMonthAbbreviation(past.getMonth()+1)}`)
    setTommorow(`${future.getDate()} ${ getMonthAbbreviation(future.getMonth()+1)}`)
  }, [])
  
  
  return (
    <>
    <GuideRoutes goBack={()=>{navigation.goBack()}} today={Today} yesterday={Yesterday} tommorow={Tommorow} />
    </>
  )
}

export default Guide