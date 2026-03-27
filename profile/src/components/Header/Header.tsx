import { Container, ContainerList, Item, List } from "./styles";

const Header = () => {
  return (
    <Container>
      <ContainerList>
        <List>
            <Item><a href="#quem-sou-eu">Sobre</a></Item>
            <Item><a href="#competencias">Competencias</a></Item>
            <Item><a href="#contato">Contato</a></Item>
        </List>
      </ContainerList>
    </Container>
  )
}

export default Header
