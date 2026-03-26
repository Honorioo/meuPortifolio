import { Container, Description } from "./styles";
import photoProfile from "../../assets/img/foto.jpg";
import { useState, useEffect  } from "react";
import { api } from "../../services/api";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const Profile = () => {
  
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState<Repo[]>([])
  
  const handleProjects = async () => {
    try {
      const response = await api.get('/users/Honorioo/repos');
      
      setRepos(response.data); // já vem como array
    } catch (error) {
      alert('Erro ao buscar repositórios.');
    }
  }
  useEffect(() => {
    handleProjects();
  }, []);
  return (
    <Container>
      <Description>
        <div className="profile-info">
          <h1>Vinicius Honorio</h1> 
          <img src={photoProfile} alt="Profile" />
        </div>

        
        <div className="card-container">
          {repos.map((repo) => (
            <div className="card" key={repo.id}>
              <h2>{repo.name}</h2>
              <a href={repo.html_url} target="_blank">
                Ver repositório
              </a>
            </div>
          ))}
        </div>

      </Description>
    </Container>
  )
}

export default Profile
