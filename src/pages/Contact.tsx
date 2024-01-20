import { Col, Container, Figure, Row } from "react-bootstrap"
import { FaInstagram, FaSteam, FaWhatsapp } from "react-icons/fa";
import { instagramLink, whatsappLink } from "../components/FooterBar";

function Contact() {
  return (
    <Container className="lg:ml-52 lg:mt-28">
      <Row>
        <Col sm>
          <section className="mt-24 ml-24 animate__animated animate__fadeInLeft select-none">
            <h1 className="font-lexend text-xl text-whiteTxt underline underline-offset-4"> deseja entrar em contato : </h1>
            <ul className="mt-2">
              <li>
                <a href={instagramLink} target="_blank" className="text-whiteTxt font-jura text-xl font-extralight flex-row flex gap-2 items-center hover:text-orangeBold transition-all">
                  <FaInstagram size={20} /> @dreamnexus_studios
                </a>
              </li>
              <li>
                <a target="_blank" className="text-darkTXT font-jura font-extralight flex-row text-xl flex gap-2 items-center ">
                  <FaSteam size={20} /> indisponivel
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" className=" text-whiteTxt font-jura text-xl font-extralight flex-row flex gap-2 items-center hover:text-orangeBold transition-all">
                  <FaWhatsapp size={20} /> me envie uma mensagem
                </a>
              </li>
            </ul>
          </section>
        </Col>

        <Col sm>
          <section className="animate__animated animate__fadeIn select-none">
            <Figure>
              <Figure.Image
                width={200}
                alt="Felix the cat"
                src="./Boneco1.png"
              />              
            </Figure>
          </section>
        </Col>
      </Row>

    </Container>
  )
}

export default Contact