import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {WeaterComponent , Temp , City} from  "./WeatherStyles"

const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=4e8b5b0ae95d2d68f54f20df4c420d62'


const Weather = () => {
  const [data, setData] = useState(null)


   useEffect(() => {
      axios.get(url).then((response) =>{
       setData(response.data)
      }).catch((error) => {
        console.log(error)
      })
   },[])
       console.log(data)

  return (
      <WeaterComponent>
    <Temp>data</Temp>
    <City>Turkey , Istanbul</City>
    </WeaterComponent>
  )
}

export default Weather