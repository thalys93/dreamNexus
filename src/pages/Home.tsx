import { Col, Container, Figure, Row } from "react-bootstrap"

function Home() {
  return (
    <Container className="lg:ml-52 lg:mt-28">
      <Row>
        <Col sm>
          <section className="mt-28 ml-24">
            <h1 className="font-lexend text-xl text-whiteTxt underline underline-offset-4"> dream nexus studio : </h1>            
            <p className="font-lexend font-extralight text-whiteTxt text-3xl">
              Criando <b className="text-orange"> mundos </b> que
              <br /> você nunca vai querer <br />
              <b className="text-orange"> deixar </b>
            </p>
          </section>
        </Col>

        <Col sm>
          <section>
            <Figure>
              <Figure.Image
                width={200}                
                alt="171x180"
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