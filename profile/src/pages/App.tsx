import Header from '../components/Header/Header';
import { Container, ContainerHeader, ContainerBody } from './styles';
import Profile from '../components/profile/Profile';

function App() {
  return (
    <Container>
      <ContainerHeader>
        <Header />
      </ContainerHeader>

      <ContainerBody>
        <Profile />
      </ContainerBody>
    </Container>
  );
}

export default App;
