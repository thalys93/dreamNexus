import { Col, Container, Figure, Row } from "react-bootstrap"

function Home() {
  return (
    <Container className="lg:ml-52 lg:mt-28 lg:mb-40 ">
      <Row>
        <Col sm>
          <section className="lg:mt-28 lg:ml-24 animate__animated animate__fadeInLeft select-none">
            <h1 className="font-lexend lg:text-xl text-whiteTxt underline underline-offset-4"> dream nexus studio : </h1>
            <p className="font-lexend font-extralight text-whiteTxt text-2xl lg:text-3xl">
              Criando <b className="text-orange"> mundos </b> que
              <br /> você nunca vai querer <br />
              <b className="text-orange"> deixar </b>
            </p>

            <p className="font-lexend font-extralight text-sm lg:text-lg">
              <a href="/Project/news/making_of" className="text-whiteTxtWeak hover:text-orange transition-all duration-200">
                Novas fotos da semana #1 (Astral Wield - Making of)
              </a>
            </p>
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
              <Figure.Caption className="text-orangeWeak text-center">
                Félix - O Gato
              </Figure.Caption>
            </Figure>
          </section>
        </Col>
      </Row>

    </Container>
  )
}

export default Home