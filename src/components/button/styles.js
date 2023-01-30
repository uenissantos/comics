import styled, { css } from 'styled-components';

export const Button = styled.button`
${({theme}) => css`
background-color: ${theme.colors.primaryColor}  ;
height:2.5rem ;
width: 50% ;
color:${theme.colors.white}  ;
border-radius: 12px ;
 ;
`}
`;