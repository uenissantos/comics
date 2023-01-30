import React from 'react'
import P from 'prop-types'
import *  as Styled from './styles'


export const Input = ({ type='text',  placeholder='digite para pesquisar', id, value, onChange }) => {
	return (

		<Styled.InputContainer
			placeholder={placeholder}
			Type={type}
			id={id}
			value={value}
			onChange={onChange}
		>

		</Styled.InputContainer>
	)
};


Input.propTypes = {

	type: P.string,
	placeholder: P.node,
	id: P.string,
	value: P.string,
	onChange:P.func

}
