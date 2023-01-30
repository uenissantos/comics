import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import *  as Styled from './styles'
import {AiOutlineSearch} from 'react-icons/ai'
import {Input} from '../../components/input/Input'



export const ComicsFactory = ({data=[]}) => {
const [arg, setarg] = useState('');


/*  const {comicFilter }=  Search({data})
 */
            

const comicFilter= useMemo(()=>{
const lowerSearch=arg.toLowerCase()

    return data.filter((comic)=> comic.title.toLowerCase().includes( lowerSearch)    ); 

    },[arg]) 
   
     


return (
<>

<Styled.ComicsFactory>
<article   className='search'>
    <Input  placeholder={`O que voçê quer ler  ?`} 
    type='text'
     value={arg}  onChange={(event)=>setarg(event.target.value)}/>
         <AiOutlineSearch/>
 
    </article>

<section className='grid'>
{
    comicFilter.map((comic)=>(
<div  className='wrapper-comic' key={comic.id}>

{console.log(comic) }

    <ul>

<Link  to={`/details/${comic.id}`}>


            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension} `} alt="" />      

</Link>
        
          <h2>{comic.title}</h2>

          <div className='issue-number'><p>{comic.issueNumber}
            </p></div>

<p>  R$ {comic.prices[0].price}</p>



    </ul>
</div>
    ))
} 

</section>


</Styled.ComicsFactory>

</>

)
};