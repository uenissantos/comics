import styled, { css } from 'styled-components';

export const Button = styled.button`
${({theme}) => css`
background-color: ${theme.colors.primaryColor}  ;
height:2.5rem ;
width:18rem ;
max-width:100%;
color:${theme.colors.white}  ;
border-radius:0  28px 0 18px ;


`}
`;