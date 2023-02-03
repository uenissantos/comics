import React from 'react'
import *  as Styled from './styles'
import {Navbar}  from'../../components/navbar/Navbar'
import { Outlet } from 'react-router-dom';

export const Home = () => {
return (

<Styled.Home>

<Navbar/>


<Outlet/>


</Styled.Home>
)
};