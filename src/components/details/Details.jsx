import React, { useEffect, useState } from 'react'
import *  as Styled from './styles'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';



export const Details = () => {
    let{id}=useParams();

 const{ state}= useFetch(`/${id}`)
 console.log( state);




  

return (

<Styled.Details>
 {


state.map((comic)=>{

console.log('esse é o log principal da details',comic);

return (

<div  key={comic.id}>
    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension} `} alt={comic.title} />  

<h2>{comic.title}</h2>

 <p>{comic.prices[0].price} </p>

 <p>{comic.pageCount} </p>
 <p>{comic.creators.items.name} </p>
 <h2>{comic.description}</h2>


</div>

)   



})
}  


</Styled.Details>
)
};