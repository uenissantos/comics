import styled, { css } from 'styled-components';

export const InputContainer = styled.input`
${({ theme }) => css`

border: 1px solid ${theme.colors.ligth}  ;
border-radius:15px;
height:${theme.sizes.smaller}  ;
min-width: 100px ;
padding-left:25px ;
width: 90% ;
`}

`;
