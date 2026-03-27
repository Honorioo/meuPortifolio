import { Container, Description, Sobre } from "./styles";
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
  
  const [repos, setRepos] = useState<Repo[]>([])
  
  const handleProjects = async () => {
    try {
      const response = await api.get('/users/Honorioo/repos');
      
      setRepos(response.data); 
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
      <Sobre>
        <div className="sobre-content">
          <h2 id="#quem-sou-eu">
            Sobre
          </h2>
          <p>
            Olá! Sou Vinicius Honorio, um desenvolvedor apaixonado por tecnologia e inovação. Com experiência em desenvolvimento web, estou sempre em busca de novos desafios para aprimorar minhas habilidades e criar soluções eficientes. Adoro aprender novas tecnologias e estou comprometido em entregar projetos de alta qualidade. Vamos construir algo incrível juntos!
          </p>
        </div>
      </Sobre>

    </Container>
  )
}

export default Profile
