import { useEffect, useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap"

function NavigationBar() {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleRezise = () => setWindowSize(window.innerWidth)
    window.addEventListener('resize', handleRezise);
    return () => {
      window.removeEventListener('resize', handleRezise);
    };
  }, []);

  const uid = '5kW0LmdQ'

  return (
    <Navbar expand="lg" className="m-4 items-center">
      <Container fluid>
        <Navbar.Brand href="/" className="text-orange hover:text-whiteTxt transition-all font-jura flex flex-row items-center gap-2">
          <Image src="./favicon.jpg" width={50} roundedCircle />
          {windowSize >= 576 ? 'Dream Nexus Studios' : 'DS'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" id="navbar-nav">
          <i className='bi bi-list text-whiteTxt' />
        </Navbar.Toggle>

        <Navbar.Collapse>
          <Nav className="me-auto items-end font-lexend font-extralight uppercase">

          </Nav>
          <Nav className="font-lexend items-end font-extralight uppercase">            
              <Nav.Link href="About" className="text-whiteTxt hover:text-orange transition-all hover:underline">Sobre</Nav.Link>
              <Nav.Link href={`Project/${uid}/astralWield`} className="text-whiteTxt hover:text-orange transition-all hover:underline">Projetos</Nav.Link>
              <Nav.Link href="Contact" className="text-whiteTxt hover:text-orange transition-all hover:underline">Contato</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar