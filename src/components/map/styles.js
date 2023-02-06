import styled, { css } from 'styled-components';

export const Map = styled.div`
${({theme}) => css`
.map {
  width: 100% ;
  height: 400px;
  text-align: center ;
  border: 1px solid ${theme.colors.ligth} ;
}
.map-marker {
  margin-top: 30px;
}

.address {
  width: 80vw;
  max-width: 600px ;
  padding: 12px;
  display: flex;
  flex-direction: column ;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
  font-size: 14px;
  position: absolute;
left:0 ;
right:0 ;
margin:auto ;

}

.addressField {
  box-sizing: border-box;
  border: 1px solid transparent;
  width: 100%;
  height: 32px;
  margin-bottom: 8px;
  padding: 0 12px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  outline: none;
  text-overflow: ellipses;


}
`}
`;