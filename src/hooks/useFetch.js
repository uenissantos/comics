import axios from "axios";
import md5 from "md5";
import { useState } from "react";
import { useQuery } from "react-query";


const publicKey= import.meta.env.VITE_PUBLIC_KEY
const privateKey= import.meta.env.VITE_PRIVAT_KEY
const baseUrl= import.meta.env.VITE_PUBLIC_KEY


  export const useFetch=(id='' ,time=1000)=>{
const url =`https://gateway.marvel.com/v1/public/comics${id}?ts=1&apikey=${publicKey}&hash=175e24bfbea8c368a74bcecbf1ea5ab1&limit=20`

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