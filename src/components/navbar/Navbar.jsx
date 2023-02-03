    import React, { useEffect, useState } from 'react'
    import *  as Styled from './styles'

    import {AiOutlineShopping,AiOutlineClose} from 'react-icons/ai'

    
    
    import logo from '../../assets/logo.png'
    import { Input } from '../input/Input';

    import {AiFillCloseCircle} from 'react-icons/ai'
    import {GiHamburgerMenu} from 'react-icons/gi'
    import {HiUserCircle} from 'react-icons/hi'
    import { Button } from '../button/Button';
    import { Link } from 'react-router-dom';
    import { navLinks } from '../../data';
    import { bagWarningMoldal } from '../../data/';

    export const Navbar = () => {
    const [moldalbag, setmoldalBag] = useState(false);
    const [menuButton, setMenuButton] = useState(false);
    const visibleMoldalBag=()=> setmoldalBag(!moldalbag)
    const selectMenu=()=> setMenuButton(!menuButton)




    




    return (
    <>   
    <Styled.Navbar menuButton={menuButton} >
    
    <article  className='menu'>

         <button  onClick={()=>selectMenu()} className='menu-button'>
          { menuButton ?  <AiFillCloseCircle/>:<GiHamburgerMenu/>}
    </button>
    <img src={logo} alt="logo" />



    <button onClick={()=>visibleMoldalBag()}>
        <AiOutlineShopping   />

    </button>

    </article>





<article  className='wrapper-nav-links'>
<section  className='welcome'>
        <HiUserCircle />
        <div>
             <strong> Bem Vindo ! </strong>
        <Link>
        <p> entre ou cadastre-se</p>

        </Link>
        </div>
       
    </section   >
<ul className='nav-links' >
        { navLinks.map((link, i)=>(
        <li key={i}>
            <Link>{link}</Link>
        </li>


        ))}
    </ul>
</article>



    </Styled.Navbar>



    { moldalbag &&  <Styled.Section>

        <section className='bag-warning-moldal'  >
        
    <AiOutlineClose onClick={()=>visibleMoldalBag()}  />

    {
        bagWarningMoldal.map((warning,i)=>(

    <div  key={i}> 

    <span> {warning.name}</span>

    <h2> { warning.title }</h2> 

    <p> { warning.paragraph}   </p>
    </div>

        ))
    }

    <Button  onClick={()=>visibleMoldalBag()}>
        Continuar navegndo
    </Button>

    </section>
    </Styled.Section>}


    </>
    )
    };