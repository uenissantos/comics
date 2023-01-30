import styled, { css } from 'styled-components';

export const ComicsFactory = styled.div`
${({theme}) => css`
margin-top: 50px ;
width:100vw ;



.grid{

    display: grid ;
grid-template-columns:repeat(2,1fr);
}

a{
    :hover{
        color: none ;
        border:none ;
    }
}


img{
width:100%;
border-radius:10px ;

}
.wrapper-comic{
margin: 30px ;
display: flex ;
justify-content: space-around ;

h2{
width:100%  ;
font-size:18px ;
height: 35px ;
overflow: hidden ;
margin: 25px  5px 5px 5px; 
}


.issue-number{
text-align: center ;
height:30px ;
width:30px ;
border: 2px solid  ${theme.colors.dark} ;
border-radius:5px ;

p{
    font-size:16px ;
    margin-top:8px ;
}
}

p{
margin-top:10px ;
font-size:18px ;
color:${theme.colors.ligth} 
}

}

.search{

margin-left: 25px ;
display:flex ;
svg{
    height: 22px ;
    position: relative;
    padding:7px ;
    right:10% ;
}
}



`}
`;