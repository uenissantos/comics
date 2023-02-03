import React, { useEffect, useState } from 'react'
import { ComicsFactory } from '../../../components/comicsFactory/ComicsFactory';
import { useFeth } from '../../../hooks/useFetch';
import *  as Styled from './styles'


export const ComicsCenter = () => {

         
  const {data, status}=  useFeth()
return (

<Styled.ComicsCenter>     
    
    <ComicsFactory  data={data}  status={status} />
 


</Styled.ComicsCenter>
)
};