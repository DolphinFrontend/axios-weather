import axios from 'axios'
import React, {useState,useEffect} from 'react'
import {QueteContainer,Text} from "./QuoteStyles"

const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1"

const Quote = () => {
 const [data, setData] = useState(null)

      
  useEffect(() => {
     axios.get(url).then((response) =>{
      setData(response.data)
     }).catch((error) => {
      console.log(error)
     }) 
   
  },[])
       if(!data) return null



  return (
    <QueteContainer>
    <Text>{data.quotes[0].text}</Text>
    <Text>-{data.quotes[0].author}</Text>
    </QueteContainer>
  )
}

export default Quote