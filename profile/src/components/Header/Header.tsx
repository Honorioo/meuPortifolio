import { Container, Item, List } from "./styles";

const Header = () => {
  return (
    <Container>
        <List>
            <Item><a href="#quem-sou-eu">Quem sou eu</a></Item>
            <Item><a href="#competencias">Competencias</a></Item>
            <Item><a href="#projetos">Projetos</a></Item>
            <Item><a href="#contato">Contato</a></Item>
        </List>
    </Container>
  )
}

export default Header
