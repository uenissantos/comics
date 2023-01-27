import styled, { css } from 'styled-components';

export const Map = styled.div`
${() => css`

width: 800px ;

height: 600px ;
.map {
  height: 100vh;
}

.map-marker {
  margin-top: -30px;
}

.address {
  box-sizing: border-box;
  width: 240px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  position: absolute;
  left: 50%;
  margin-left: -120px;
  margin-top: 12px;
}
`}
`;