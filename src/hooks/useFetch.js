import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"

const publicKey= import.meta.env.VITE_PUBLIC_KEY
const hash= import.meta.env.VITE_HASH



 export const useFeth=  ( id='',key='comic',time= 1000*60)=>{

   const [testeId, settesteId] = useState(id);


  const url =`https://gateway.marvel.com/v1/public/comics${testeId}?ts=1&apikey=${publicKey}&hash=${hash}&limit=100`


  const { data , status}= useQuery  (key, async ()=>{

   const response = await  axios.get(url)

    return  response.data.data.results




 },{

    staleTime:time
    
 }
 
 )


return {data,status}


}






 