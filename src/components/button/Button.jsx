import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Button = ({ children, onClick }) => {
return (

<Styled.Button  onClick={onClick}>
{children}
</Styled.Button>
)
};


Button.propTypes = {

children: P.node.isRequired,
onClick:P.func
}