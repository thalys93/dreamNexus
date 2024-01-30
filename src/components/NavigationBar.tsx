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

  const routeName = window.location.pathname

  const [isAboutRoute, setIsAboutRoute] = useState(false)
  const [isProjectRoute, setIsProjectRoute] = useState(false)
  const [isContactRoute, setIsContactRoute] = useState(false)

  const checkRouteName = (routeName: string) => {
    if (routeName === '/About') {
      setIsAboutRoute(true)
    } else if (routeName === `/Project/${uid}/astralWield`) {
      setIsProjectRoute(true)
    } else if (routeName === '/Contact') {
      setIsContactRoute(true)
    } else {
      setIsAboutRoute(false)
      setIsProjectRoute(false)
      setIsContactRoute(false)
    }
  }

  useEffect(() => {
    checkRouteName(routeName)

  }, [routeName, isProjectRoute])

  return (
    <Navbar expand="lg" className="m-4 items-center">
      <Container fluid>
        <Navbar.Brand href="/" className="text-orange hover:text-whiteTxt transition-all font-jura flex flex-row items-center gap-2">
          <Image src="/favicon.jpg" width={50} roundedCircle />
          {windowSize >= 576 ? 'Dream Nexus Studios' : 'Dream Nexus'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" id="navbar-nav">
          <i className='bi bi-list text-whiteTxt' />
        </Navbar.Toggle>

        <Navbar.Collapse>
          <Nav className="me-auto items-end font-lexend font-extralight uppercase">

          </Nav>
          <Nav className="font-lexend items-end font-extralight uppercase">
            <Nav.Link href="/About" className={!isAboutRoute ? 'text-whiteTxt hover:text-orange transition-all hover:underline underline-offset-4' : 'text-orange underline underline-offset-4'}>Sobre</Nav.Link>
            <Nav.Link href={`/Project/${uid}/astralWield`} className={!isProjectRoute ? 'text-whiteTxt hover:text-orange transition-all hover:underline underline-offset-4' : 'text-orange underline underline-offset-4'}>Projetos</Nav.Link>
            <Nav.Link href="/Contact" className={!isContactRoute ? 'text-whiteTxt hover:text-orange transition-all hover:underline underline-offset-4' : 'text-orange underline underline-offset-4'}>Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar