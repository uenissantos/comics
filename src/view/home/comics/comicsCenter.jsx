import React, { useEffect, useState } from 'react'
import { ComicsFactory } from '../../../components/comicsFactory/ComicsFactory';
import { useFetch } from '../../../hooks/useFetch';
import *  as Styled from './styles'


export const ComicsCenter = () => {
    const { state}=useFetch()







return (

<Styled.ComicsCenter>

    <ComicsFactory  data={state} />
</Styled.ComicsCenter>
)
};