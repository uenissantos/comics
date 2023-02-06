      import React, { useEffect, useState } from 'react'
      import *  as Styled from './styles'
      import { useParams } from 'react-router-dom';
      import { useFeth } from '../../hooks/useFetch';
      import { Button } from '../button/Button';
      import { Creators } from './creators';
   import {AiOutlineFieldNumber}from 'react-icons/ai'
   import {GoDiffModified}from 'react-icons/go'
   import {TbBrandPagekit}from 'react-icons/tb'
   import {MdPriceChange}from 'react-icons/md'
   import { formattedDate } from '../../util/formattedDate';
import { storeLocation } from '../../util/storeLocation';


   export const Details = () => {


         let{id}=useParams();

         const {data:valueCreator,status}=Creators(id)

         console.log('log do criador',valueCreator);

      function  getCreator(){

         
      return (
         <article>
            {status === "loading" && <div>Loading...</div>}
            {status === "error" && <div> não foi possivel pegat o autor  </div>}
      {   status === "success" &&    valueCreator.map((creator)=> (
      <section key={creator.id}>
      <span> autor: <p> {creator.fullName}</p></span>
      </section>
         )
      )}
         </article>
      )


      }



      const  getDetails=()=>{

      let key='details'
      let time=0
      const { data,status}=  useFeth(  id=`/${id}`,key=key,time)

      console.log(  'log do details',data);


      return (

         <article>
            
               <div>
            {status === "loading" && <div>Loading...</div>}
            {status === "error" && <div>Error fetching  </div>}
            </div>
            {
               status === "success" && 
               data.map((details)=>(
               <section  key={details.id}>

                  <div  className='wrapper'>
      <img src={`${details.thumbnail.path}.${details.thumbnail.extension} `} alt="" />      
               
                     <div className=' information-description'>
                     <h1>{details.title}</h1>
                     {getCreator()}

                  </div>
            
                     </div>

                     <div  className='price-and-button'>
                        <div  className='price'>
                           <MdPriceChange/>
                           <p>  R$ {details.prices[0].price}</p>
                           </div>
         
                        <Button   onClick={()=>storeLocation( details)}> adicionar à sacola  </Button>
         
         </div>

         <div  className=' wrapper-sinopse-and-information'>
                              {    details.description !=='' ?  <details className='description'> 
            <summary>   Sinopse  </summary> 
            <p>
               {details.description} 
            </p>
            </details>:<p> não a descrição</p>
         }

                     <section className='information-additional'>
                                 
               <div className='issue'>
                  <p> número de emissão </p>
                  <AiOutlineFieldNumber/>
                  <h3>{details.issueNumber} </h3>
                  </div>

               <div className='issue'>
                  <p> ultima modificação </p>
                  <GoDiffModified/>

                  <h3>{  formattedDate(details.modified ) }</h3>
                  </div>

         
               <div className='issue'>
                  <p> paginas</p>
                  
                  <TbBrandPagekit/>


   {            <h3>{details.pageCount}</h3>
   }               </div>
         
                     </section>
         </div>

                     </section>
              




            )  ) 
         } 
         
         </article>
         
      )
      }




         


      return (

      <Styled.Details>
      {getDetails()}

      </Styled.Details>
      )
      };