import { useState } from 'react';
import Header from '../components/Header/Header';
import api from '../services/api';
import { Container, ContainerHeader, ContainerBody } from './styles';
import Profile from '../components/profile/Profile';

interface Repo {
  id: number;
  name: string;
  // add other properties as needed
}

function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState<Repo[]>([])
  
  const handleProjects = async () => {
    try {
      const response = await api.get('/repos/vinicius-honorio');
      const data = response.data;

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      }
    } catch (error) {
      alert('Erro ao buscar repositório. Verifique o nome do repositório.');
    }
  }

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
