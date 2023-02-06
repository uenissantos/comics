import { useEffect, useState } from "react";

export  const storeLocation =( value)=>{

    
let gap=[{}]



if(localStorage.gap){

    gap= JSON.parse(localStorage.getItem('gap'))
}

gap.push( {
 image:`${value.thumbnail.path}.${value.thumbnail.extension} `,
 title:value.title,
 price:value.prices[0].price,
 id:value.id


})



localStorage.gap=JSON.stringify(gap)




}