import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import *  as Styled from './styles'
import {AiOutlineSearch} from 'react-icons/ai'
import {Input} from '../../components/input/Input'
import { Button } from '../button/Button';
import { useQuery } from 'react-query';
import axios from 'axios';
import {useSearch}  from '../../hooks/useSearch'
import { usePagination } from '../../hooks/usePagination';

export const ComicsFactory = ({data=[], status='loading'} ) => {


console.log('comics:',data);

const [arg, setarg] = useState(''); 

 

 const {comicFilter}= useSearch(data,arg,status)

     const { currentItens,itensPerPage, 
    setItensPerPage}=usePagination(comicFilter)

    
   function loadMore(){
setItensPerPage( itensPerPage+10)

   }
 

  





return ( 

<>

<Styled.ComicsFactory>
 <article onClick={()=>tese}  className='search'>
    <Input  placeholder={`O que voçê quer ler  ?`} 
    type='text'
     value={arg}  onChange={(event)=>setarg(event.target.value)}/>
         <AiOutlineSearch/>
 
    </article>

    
    <div>
  {status === "loading" && <div>Loading...</div>}
  {status === "error" && <div>Error fetching 
    </div>}
 </div>
 <section className='grid'>
 {   status === "success" && 

    currentItens.map((comic, )=>(
<div  className='wrapper-comic' key={comic.id}>


    <ul>

<Link    to={`/details/${comic.id}`}>


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

 
<div className='button'>
    <Button onClick={()=>loadMore()} >carregue mais </Button>

</div>
</Styled.ComicsFactory>

</>

)
};