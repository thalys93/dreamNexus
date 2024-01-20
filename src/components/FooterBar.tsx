import { Container, Nav, Navbar } from "react-bootstrap"
import { FaInstagram, FaSteam, FaWhatsapp } from "react-icons/fa";

function FooterBar() {
    const year = new Date().getFullYear()

    // info links socials
    const instagramLink = 'https://www.instagram.com/dreamnexus_studios/'
    const whatsappLink = 'https://api.whatsapp.com/send?phone=555195726941&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Dream%20Nexus%20Studios.'
    
    // >> desativado até lançamento do Jogo
    // const steamLink = 'https://steamcommunity.com/profiles/76561199456925447/'
    
    return (
        <Navbar className="m-4 items-center" fixed="bottom">
            <Container fluid>
                <Navbar.Brand className="text-orange select-none hover:text-whiteTxt transition-all font-jura flex flex-row items-center gap-2">
                    Dream Nexus © {year}
                </Navbar.Brand>
                <Nav className="me-auto items-end font-lexend font-extralight uppercase">
                </Nav>
                <Nav className="font-lexend items-end font-extralight uppercase">
                    <Navbar.Text className="text-orangeWeak mr-2 hover:text-orangeWeak select-none transition-all">
                        <FaSteam size={25} />
                    </Navbar.Text>
                    <Nav.Link href={instagramLink} target="_blank" className="text-orange hover:text-whiteTxt" active={false}>
                        <FaInstagram size={25} />
                    </Nav.Link>
                    <Nav.Link href={whatsappLink} target="_blank" className="text-orange hover:text-whiteTxt" active={false}>
                        <FaWhatsapp size={25} />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default FooterBar