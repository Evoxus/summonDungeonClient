import { Navbar, Container, Nav } from 'react-bootstrap';
export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">summonDungeon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Characters</Nav.Link>
            <Nav.Link href="#link">New Character</Nav.Link>
            <Nav.Link href="#link">Dice Roller</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}