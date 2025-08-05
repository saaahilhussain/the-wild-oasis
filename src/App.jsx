import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const H1 = styled.h1`
  color: orangered;
  font-weight: 600;
  background-color: aquamarine;
  padding: 1rem;
  margin: 2rem;
  border-radius: 3rem;
`;

const StyledApp = styled.main`
  padding: 20px;
  background-color: #333;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello World</H1>
        <H1>React</H1>
        <H1>React Router</H1>
        <H1>React Query</H1>
        <H1>Next.js</H1>
      </StyledApp>
    </>
  );
}

export default App;
