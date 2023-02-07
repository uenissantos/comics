import React, { useEffect, useState } from 'react'
import *  as Styled from './styles'
import { CiSquareMinus ,CiSquarePlus } from 'react-icons/ci'
import { AiFillDelete } from 'react-icons/ai'

import{Map} from '../../components/map/Map'
import { Button } from '../button/Button';
import { FaUnderline } from 'react-icons/fa'


export const Bag = () => {

  
  const data =  JSON.parse( localStorage.getItem('gap')) || []
const [ totalPrice,setTotalPrice] = useState('')







const  detailsGap =()=>{
data.map((item)=>{

  setTotalPrice(item.price)

})

}


  function  deleteStorage(id){
    let index = data.findIndex(data => data.id === id);
    if (index !== -1) {
      data.splice(index, 1);
      localStorage.setItem("gap", JSON.stringify(data));
    }
  }
  

return (

<Styled.Bag>




<article>

{
    data && data.map((item)=>{
return(
<article key={item.id}  className='wrapper-items'>
  <img src={item.image} alt="" />


  <section className='value-items' >
  
<div>

    <strong> {item.title}</strong>
    <div className='price' >
      <p>  R$  {item.price}</p>

      <section className='wrapper-amount'>
     <div className='amount'>
     {totalPrice}
</div>   

      <div  className='button-increase-decrease' >

<button>
    <CiSquarePlus />

</button>
<button>
   <CiSquareMinus/>
</button>
</div>
      </section>


    </div>

</div>

</section>

<button onClick={()=>deleteStorage(item.id)} > <AiFillDelete/></button>

</article>
)

})
}


</article>


<article className='resume-requeste'   >

<div>
   <h2> Resumo do Pedido</h2>
  <div className='price-total'>
<p> Subtotal</p> <p> R$ 3.50</p>

  </div>
  <div  className='price-total'>
  <p>Frete</p>  <p>grátis</p>
</div>
  <div className='price-total'>
<p>Total: </p> <p> 8.00</p>
  </div>

</div>


  <div  className='send'>
  <span> IMPORTANTE: </span> <p>verifique sempre o seu endereço antes de  efetuar o pedido</p>
  <Map/>

  <Button > Comprar</Button>

</div>
</article>






</Styled.Bag>
)
};