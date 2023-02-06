import styled, { css } from 'styled-components';

export const Bag = styled.div`
${({theme}) => css`



.wrapper-items{
display: flex ;
width: 80% ;
max-width: 350px;
padding:15px ;
border-bottom:1px solid ${theme.colors.ligth} ;
margin: auto ;
img{
    width: 5rem ;
    height:6rem ;
    margin: auto ;

}



svg,button{

margin: 5px  auto;
width: 17px ;
height: 17px ;

}

}
.value-items{
    width:150px ;

margin: auto ;
    strong{
font-size:12px ;

font-weight:bold ;
    }
}

.price{
width: 150px ;


p{
font-size: 12px ;
margin:10px auto ;
}

}
.wrapper-amount-bottons{
    display:flex ;
    margin: 25px auto;
}


.amount{
border:1px solid ${theme.colors.ligth} ;
width: 50px ;
height: 18px ;

}


.button-increase-decrease{
    display:flex ;
flex-direction: column ;
position: relative ;
bottom: 2.5rem ;

}


.resume-requeste{
    margin: 25px auto ;
    text-align: center ;
    h2{
        font-size:18px ;
        color:${theme.colors.primaryColor} ;
        margin: 10px ;
    }
}

.price-total,.transport{
    display:flex ;
    margin:  25px auto;

    p{
margin:  5px auto;
font-size: 14px ;
font-weight: lighter ;
    }

}


.send{
position: relative ;
display: flex ;
height: 550px ;
justify-content: space-around ;
flex-direction:column ;
padding: 20px ;
button{
    margin: auto ;
}

span{
    color:red;
    letter-spacing: 1px ;
    font-weight:bold ;
    
}
p{

margin:  15px 25px ;

}
}


${theme.breakpoints.xl}{
    display:grid ;
grid-template-columns: 1fr 1fr ;
margin: auto ;
justify-content:space-around ;







}



`}
`;