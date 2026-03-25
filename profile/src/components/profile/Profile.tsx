import { Container, Description } from "./styles";
import photoProfile from "../../assets/img/foto.jpg";

const Profile = () => {
  return (
    <Container>
      <Description>
        <div className="profile-info">
          <h1>Vinicius Honorio</h1> 
          <img src={photoProfile} alt="Profile" />
        </div>
        <div className="card-container">
          <div className="card">
            <p> card </p>
          </div>
          <div className="card">
            <p> card </p>
          </div>
          <div className="card">
            <p> card </p>
          </div>
          <div className="card">
            <p> card </p>
          </div>
          <div className="card">
            <p> card </p>
          </div>
          <div className="card">
            <p> card </p>
          </div>
        </div>

      </Description>
    </Container>
  )
}

export default Profile
