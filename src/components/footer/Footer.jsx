import React from 'react'
import { Link } from 'react-router-dom';
import { footerLinks} from '../../data';
import *  as Styled from './styles'
import  {FaCcMastercard,FaMoneyBillAlt,FaInstagram,FaTwitter,FaLinkedinIn,FaTiktok} from 'react-icons/fa'
import  {RiPaypalFill} from 'react-icons/ri'
import  {SiApplepay,SiGooglepay} from 'react-icons/si'


import  logo from '../../assets/logo.png'
import  aphone from '../../assets/aphone.png'
import  appstore from '../../assets/appstore.png'
import  googleplay from '../../assets/googleplay.png'

export const Footer = () => {


const footerSocialIcons = [
<FaInstagram />,
<FaTwitter />,
<FaLinkedinIn />,
<FaTiktok /> 
] 
 const footerPaymentIcons=[<FaCcMastercard />, <FaMoneyBillAlt />,  <RiPaypalFill />, 
<SiApplepay />,<SiGooglepay/>]

return (

<Styled.Footer>

<article   className='wrapperFooter '>
    <section  className='link'>

            <ul>
       {
        footerLinks.map((link,i)=>(
            <li key={i}>
                <Link> {link}</Link>
            </li>
        ))
       } 
    </ul>
    </section>


<article className='social-icon-payment'>



    
    <section className='wrapper-icon'>
        <div>
        <p> Fale Conosco</p>
        <span>contato@mokoto.com</span>
        </div>
   <ul>
       {
        footerSocialIcons.map((icon,i)=>(
            <li key={i}>
                <Link   > {icon}</Link>
            </li>
        ))
       } 
    </ul>
</section>


<section className='wrapper-icon'>
    <p> Formas de pagamento</p>
   <ul>
       {
        footerPaymentIcons.map((icon,i)=>(
            <li key={i}>
                <Link> {icon}</Link>
            </li>
        ))
       } 
    </ul>
</section>
</article>


<section  className='image-desktop'>
    <div>
       <img src={appstore} alt="appstore" />
<img src={googleplay} alt="googleplay" /> 
    </div>

<img id='aphone' src={aphone} alt="aphone" />

</section>

 
</article>
   
<div className='copyright'>
    <img src={logo} alt="logo" />   <p> © 2023 MOKOTO EDITORA, PRODUTOS E SERVICOS DIGITAIS LTDA CNPJ: +55.21.9943/05914 </p> 
</div>
</Styled.Footer>
)
};