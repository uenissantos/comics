import styled, { css } from 'styled-components';

export const Footer = styled.footer`
${({theme}) => css`
background-color:${theme.colors.primaryColor} ;
text-align: center ;
position:relative ;
bottom:0 ;
a,svg{
    color:${theme.colors.white}
}


.link{
ul{
    display:flex ;
    flex-direction:column ;
width:80% ;
height: 200px ;
margin: 25px auto ;
justify-content:space-around ;} ;
    a{
        font-size:12px ;
        font-weight: bold ;
    }
}




    .wrapper-icon{

ul{
display:flex ;
width:80% ;
margin: 25px auto ;
justify-content:space-around ;
svg{
    width: 25px ;
    height:auto ;
}
}

p,span{
    color:${theme.colors.white};
    font-size:12px ;
    margin:15px ;
}


}

.image-desktop{
display:  flex;
#aphone{
    display:none ;
}


img{
    width: 110px ;
    margin: 25px  ;
}


}

.copyright{
    width:100% ;
    height: 8rem ;
    img{
        width:90px ;
    }
    p{
        font-size:11px ;
        color:${theme.colors.white};
        width: 60% ;
        margin: auto ;
    }
}





${theme.breakpoints.lg}{

.wrapperFooter {
    display:grid ;
    grid-template-columns:repeat(2,1fr) ;
}

}

${theme.breakpoints.xl}{
.wrapperFooter{
    width:70% ;
    grid-template-columns:repeat(3,1fr) ;
    margin: auto ;
height: 15rem ;
}


.image-desktop{
    position:relative ;
    left:50% ;
   
#aphone{
    display:flex ;
    position:relative ;
bottom:6rem ;
}

}


.copyright{
display:flex ;
margin:auto ;
width:60% ;
img{
    width:100px ;
    height:80px ;
    margin:auto ;
}



p{
    width:100% ;
}
}


}




`}
`;