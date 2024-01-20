import { Col, Container, Figure, Row } from "react-bootstrap"

function Project_Info() {
  return (        
      <Container>
        <Row>
          <Col sm>
            <section className="lg:mt-28 lg:ml-24 animate__animated animate__fadeInLeft select-none mb-5 lg:mb-0">
              <h1 className="font-jura text-xl text-whiteTxt lg:mb-3"> astral wield : </h1>
              <h1 className="font-jura text-xl font-bold text-orange"> Pronto para pagar o preço </h1>
              <h1 className="font-jura text-xl font-bold text-orange underline underline-offset-8 mb-2"> por sua vinda? </h1>

              <p className="font-jura font-light text-whiteTxt text-md lg:text-xl">
                <b className="font-bold">Astral Wield</b> é um empolgante jogo <br />
                de <b className="font-bold">ação/aventura</b> que mergulha os  <br />
                jogadores em um universo vibrante, <br />
                repleto de mistérios e desafios. Com <br />
                uma estética envolvente de <b className="font-bold">pixel art 2D</b>, <br />
                este título cativante combina elementos de RPG e exploração,<br />
                proporcionando uma experiência única e imersiva.
              </p>
            </section>
          </Col>
          <Col sm>
            <Figure className="animate__animated animate__fadeIn lg:mt-36 lg:ml-24">
              <Figure.Image
                width={400}
                alt="em breve Astral Wield"
                src="/coming_soon.png"
                rounded
              />
              <Figure.Caption className="font-lexend text-whiteTxt font-extralight lowercase text-center text-xl mt-3 select-none hover:text-orange transition-all">
                em breve na steam
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row className="mt-5 lg:mt-2">
          <Col sm>
            <Figure className="animate__animated animate__fadeInLeft lg:mt-36 lg:ml-24">
              <Figure.Image
                width={400}
                alt="astralwield2"
                src="/game_3.jpg"
                rounded
              />
              <Figure.Caption className="font-jura text-darkTXT font-light text-xl lowercase text-center mt-3 select-none hover:text-orange transition-all">
                pronto para ser julgado?
              </Figure.Caption>
            </Figure>
          </Col>

          <Col sm>
            <section className="lg:ml-44 animate__animated animate__fadeInRight select-none mt-10 lg:mt-40">
              <h1 className="font-lexend text-xl text-whiteTxt lowercase underline underline-offset-8 mb-3"> caracteristicas: </h1>
              <ul className="font-jura text-whiteTxt lowercase text-xl">
                <li className="text-orange font-bold"> • mundo aberto </li>
                <li> • diversos colecionáveis </li>
                <li> • combate <b className="text-orange">dinâmico</b> </li>
                <li> • história envolvente </li>
                <li> • gráficos <b className="text-orange">pixel art 2D</b> </li>
              </ul>

            </section>
          </Col>
        </Row>

        <Row className="mt-5 lg:mt-2 mb-0 lg:mb-16">
          <Col sm>
            <section className="lg:mt-28 lg:ml-24 animate__animated animate__fadeInLeft select-none mb-5 lg:mb-28">
              <h1 className="font-lexend text-xl font-extralight text-whiteTxt underline underline-offset-8 mb-3 lowercase"> previsão de lançamento: </h1>
              <p className="font-jura text-xl">
                Em breve ainda este ano <b className="text-orange"> 2024 </b> <br />
                Astral Wield estará disponível para <br />
                compra na <b className="text-orange"> Steam </b>
              </p>
            </section>
          </Col>

          <Col sm>
            <Figure className="animate__animated animate__fadeInRight lg:mt-16 lg:ml-24">
              <Figure.Image
                width={400}
                alt="astralwield2"
                src="/game_1.jpg"
                rounded
              />
              <Figure.Caption className="font-jura text-darkTXT font-light text-xl lowercase text-center mt-3 select-none hover:text-orange transition-all">
                comerciante misterioso
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>          
  )
}

export default Project_Info