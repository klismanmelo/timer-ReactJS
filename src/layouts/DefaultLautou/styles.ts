import styled from 'styled-components'

export const ContainerLayout = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2rem;

  background-color: ${(props: any) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
