import styled from 'styled-components';

export const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 1rem;
  }
`;
