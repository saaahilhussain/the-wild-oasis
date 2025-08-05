import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';

const StyledApp = styled.main`
  padding: 20px;
  background-color: orangered;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as='h1'>Hello World</Heading>

        <Button onClick={() => alert('Checki-In')}>Check-In</Button>

        <Heading as='h2'>Heading 2</Heading>

        <Button onClick={() => alert('Check-Out')}>Check-Out</Button>
        <Heading as='h3'>Heading 3</Heading>
        <Input type='text' placeholder='React is love' />
      </StyledApp>
    </>
  );
}

export default App;
