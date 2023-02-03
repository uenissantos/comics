import { useEffect, useState } from "react";


 export const useSearch=(  data ,arg='',status)=>{

const [comicFilter, setComicFilter] = useState([]);


 useEffect(()=>{

const lowerSearch=arg.toLowerCase()

 const dataFilter= data.filter((comic)=> comic.title.toLowerCase().includes ( lowerSearch)  

 
 ); 
if(status ==='success'){

    setComicFilter(dataFilter)

}


    },[data,arg]) 
    
     
    return {comicFilter }
   
}