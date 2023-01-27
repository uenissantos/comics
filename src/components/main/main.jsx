import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import *  as Styled from './styles'




export const Main = () => {

const { state}=useFetch()
const [data, setData] = useState([]);



useEffect(() => {

setData(state)

}, [state]);


   
{        console.log(data)
}

return (

<Styled.Main>


{
    data.map((comic)=>(

<div  key={comic.id}>


    <ul>

<Link  to={`/details/${comic.id}`}>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension} `} alt="" />      

</Link>
        
          <h2>{comic.title}</h2>

    </ul>
</div>
    ))
} 
</Styled.Main>
)
};