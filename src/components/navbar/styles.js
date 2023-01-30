import styled, { css } from 'styled-components';

export const Navbar = styled.nav`
${({theme,menuButton }) => css`
height:${theme.sizes.medium} ;
width: 100vw ;


 

.menu{
width:100vw ;
height:100% ;
display:flex ;
justify-content:space-around ;

    img{
   max-width:30% ;
   height: 80px ;
    }

svg{
margin-top: 15px ;
}
}




.wrapper-nav-links{
    position: absolute;
    left:  ${menuButton?'0%':'-50%'};
    display:block ;
    height: 300px ;
    width: 50% ;
    text-align: center ; 
    background-color:${theme.colors.white} ;
    transition: 1s linear ;

}


.welcome{
height:90px ;
max-width: 190px ;
display:flex ;
flex-direction:column ;
margin:  auto ;

svg{
    margin: auto ;
}
}

.nav-links{  
    background-color:${theme.colors.white} ;
    display:flex ;  
    height: 100% ;
    flex-direction:column ;
    justify-content: space-around ;


}


/* applying responsiveness to screens
 */

${theme.breakpoints.xl}{

svg,button,a{
	color:${theme.colors.white}	;

    :hover{
color:${theme.colors.hover} ;
    }
}


.menu{
background-color: ${theme.colors.primaryColor}  ;
	img{
	margin-right: 80%;
	}
}


.menu-button{
		display: none;
	}


.search{
width:500px;
position: relative;
bottom:5rem;
left:15% ;

}


.welcome{
position: relative;
bottom:8rem;
left: 100% ;
flex-direction:row ;


	svg{
	position: relative;
	right:0px ;

	}
	

}




.wrapper-nav-links{
	top: 60px ;
    right: 555rem ;
    height:50px ;
background-color:transparent;
display:flex;
width: 100% ;

}

.nav-links{  
	background-color: transparent;
    margin:auto ;
flex-direction:row ;
width: 60% ;

}



}


`}
`;






export const Section = styled.section`
${({theme}) => css`
.bag-warning-moldal{
    margin:auto ;
    left:0 ;
    right:0 ;
    top: 3rem;
position: absolute ;
    width:  80%;
    max-width: 400px ;
    height: 300px ;
background-color:${theme.colors.white} ;
border:2px solid ${theme.colors.ligth} ;
border-radius: 8px ;
box-shadow: 10px 10px 5px ${theme.colors.secundaryColor}  ;
text-align: center ;


svg{
margin-left: 70% ;
}

span{
margin-right: 10rem ;
    font-size: 0.5rem;
    letter-spacing:1px ;
    color: gray ;
}

h2{
    font-size: 18px ;
    margin: 25px ;
}
p{
    font-size:14px ;
    color:gray ;
    letter-spacing: 1px ;
    width: 70% ;
    margin: 25px auto ;
}
}
`}
`;