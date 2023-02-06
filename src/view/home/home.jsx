import React from 'react'
import *  as Styled from './styles'
import {Navbar}  from'../../components/navbar/Navbar'
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer/Footer';

export const Home = () => {
return (

<Styled.Home>

<Navbar/>


<Outlet/>

<Footer/>
</Styled.Home>
)
};