import axios from "axios";
import md5 from "md5";
import { useState } from "react";
import { useQuery } from "react-query";


const publicKey= import.meta.env.VITE_PUBLIC_KEY



 const hash= import.meta.env.VITE_HASH
 

  export const useFetch=(  todo='comics',id='' ,time=1000)=>{
const url =`https://gateway.marvel.com/v1/public/${todo}${id}?ts=1&apikey=${publicKey}&hash=${hash}&limit=20`

const [state, setstate] = useState([]);

const { data , isFetching}=useQuery(  'respos', async ()=>{

    const response = await  axios.get(url)

 setstate(  response.data.data.results) 


  },{

    staleTime:{time} 
  }
  
  
  
  )
  return {state}
  
}