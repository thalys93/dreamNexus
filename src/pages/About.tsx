import { Col, Container, Figure, Row } from "react-bootstrap"

function About() {
  return (
    <Container>
      <Row>
        <Col sm>
          <Figure className="animate__animated animate__fadeIn lg:mt-16 lg:ml-24">
            <Figure.Image
              width={400}
              alt="CEO"
              src="./CEO.jpg"
              rounded
            />
            <Figure.Caption className="font-lexend text-whiteTxtWeak font-extralight">
              ceo & fundador
            </Figure.Caption>
          </Figure>
        </Col>
        <Col sm>
          <section className="mt-10 lg:mt-28 lg:ml-24 sm:mb-10 md:mb-10 animate__animated animate__fadeInRight select-none">
            <h1 className="font-lexend lg:text-xl text-whiteTxt underline underline-offset-8 mb-3"> o que é a dream nexus studios? : </h1>
            <p className="font-jura font-extralight text-whiteTxt lg:text-xl">
              Somos uma empresa de <br /> <b className="text-orange font-bold hover:text-buttonTxt transition-all">desenvolvimento
              </b> de jogos <b className="text-orange font-bold hover:text-buttonTxt transition-all"> indies</b>,
              <br /> onde a <b className="text-orange font-bold hover:text-buttonTxt transition-all"> criatividade </b> ganha vida e a <br />
              inovação é a nossa marca registrada. <br />
              Nossa equipe é apaixonada e talentosa <br />
              está empenhada em proporcionar <b className="text-orange font-bold hover:text-buttonTxt transition-all"> Momentos inesquecíveis </b> aos <br />
              jogadores, através de jogos que <br />
              transcendem as fronteiras <br />
              convencionais              
            </p>
          </section>
        </Col>
      </Row>
      <Row>
        <Col sm>
          <section className="mt-10 lg:mt-28 lg:ml-24 animate__animated animate__fadeInRight select-none mb-10 lg:mb-28">
            <h1 className="font-lexend lg:text-xl text-whiteTxt"> criando mundos que você nunca vai</h1>
            <h1 className="font-lexend lg:text-xl text-whiteTxt underline underline-offset-8 mb-3"> querer deixar :</h1>

            <p className="font-jura font-extralight text-whiteTxt lg:text-xl">
              Na nossa jornada, exploramos <b className="text-orange font-bold hover:text-buttonTxt transition-all">mundos imaginários</b>, desafiamos padrões e contamos <b className="text-orange font-bold hover:text-buttonTxt transition-all">histórias</b> <br/> <b className="text-orange font-bold hover:text-buttonTxt transition-all">envolventes</b> que cativam os corações dos jogadores. Cada projeto é uma jornada artística, onde a liberdade criativa é cultivada e a originalidade é celebrada.
            </p>
            
            <p className="font-jura font-extralight text-whiteTxt lg:text-xl mt-3">
              Nossos jogos são mais do que linhas de código e pixels na tela; são <b className="text-orange font-bold hover:text-buttonTxt transition-all">experiências</b> que despertam emoções, provocam reflexões e transportam os <b className="text-orange font-bold hover:text-buttonTxt transition-all">jogadores</b> para universos fascinantes. Ao optar por nossos jogos indies, você está escolhendo uma aventura autêntica e única, onde a inovação se mistura com a diversão.
            </p>
          </section>
        </Col>
        <Col sm>
          <Figure className="animate__animated animate__fadeInRight lg:mt-16 lg:ml-24">
            <Figure.Image
              width={400}
              alt="astralwield2"
              src="./game_5.jpg"
              rounded
            />
          </Figure>
          <Figure className="animate__animated animate__fadeInRight lg:ml-36">
            <Figure.Image
              width={400}
              alt="astralwield5"
              src="./game_4.jpg"
              rounded
            />
          </Figure>
        </Col>
      </Row>
    </Container>
  )
}

export default About