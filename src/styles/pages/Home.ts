import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 40px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }
`
