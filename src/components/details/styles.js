import styled, { css } from 'styled-components';

export const Details = styled.div`
${({theme}) => css`
width:80vw ;
max-width: 700px ;
text-align:center ;
margin: 25px auto ;
.wrapper{
display:grid ;
grid-template-columns: 1fr 1fr ;
margin: 5rem  auto ;
overflow: hidden ;
width:100% ;
img{
    width: 100%;
    height: 100% ;
    max-height: 350px ;
    max-width: 250px ;
    border-radius: 8px ;
}
}

.information-description{
    width:100% ;
    max-width: 290px ;
    height:139px ;
    position:relative ;
    overflow:hidden ;
h1{
    font-size: 22px ;
    width:100% ;
    max-width:250px ;
    overflow:hidden ;
    height: 46px ;
    font-weight:bold ;
    margin-bottom:25px  auto;
}

p{
    color:${theme.colors.ligth};
    margin: 8px  auto 15px auto;
    
}

span{
font-size: 12px ;
}

}


.description{

    summary{
font-size:20px ;
font-weight:bold ;
letter-spacing: 2px ;
margin: 25px ;
    }

p{
    width:90% ;
    max-width:450px ;
    margin:  25px auto ;
}
}


.information-additional{

    overflow: hidden ;
    display: grid ;
    grid-template-columns: repeat(3,1fr) ;
    width: 100% ;
    margin:auto;

.issue{
    overflow: hidden ;
border-radius: 25px 0 25px 0 ;
width:80% ;
max-width: 150px ;
border: 1px solid ${theme.colors.ligth} ;

    p{
        font-size:12px ;
        color: ${theme.colors.ligth} ;
        margin:5px ;
    }
}


svg{
    height:20px ;
}

h3{
    font-size:12px ;
    font-weight:bold ;
    margin:5px ;
  
}

}

.price-and-button{

margin: 25px auto ;
.price{
    border: 1px solid ${theme.colors.primaryColor} ;
    background-color:${theme.colors.ligthGreen} ;
    width: 50% ;
    max-width: 160px ;
    margin: 15px auto ;
    border-radius: 25px 0 25px 0 ;
    svg{
height:25px ;
margin:5px ;
    }


    p{
        font-size:12px ;
    font-weight:bold ;
    margin:5px ;
    }
}

}



${theme.breakpoints.lg}{
    .price-and-button{
  position: relative ;
  bottom: 200px ;
  left: 150px ;
    }

    .wrapper-sinopse-and-information{
position:relative ;
bottom: 125px ;

}

}




`}
`;