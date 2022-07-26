import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/img/Logo.png';

function NavbarApp() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Game Zone
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default NavbarApp;