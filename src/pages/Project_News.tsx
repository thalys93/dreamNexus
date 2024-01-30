import { Col, Container, Figure, Row } from "react-bootstrap"

function Project_News() {
    return (
        <Container>
            <Row>
                <Col sm>
                    <section className="lg:mt-28 lg:ml-24 animate__animated animate__fadeInLeft select-none mb-5 lg:mb-0">
                        <h1 className="font-lexend text-xl text-whiteTxt lowercase underline underline-offset-8 mb-3"> colecionáveis: </h1>

                        <p className="font-jura font-light text-whiteTxt text-md lg:text-xl">
                            <b className="font-bold">Astral Wield</b> conta com uma série de colecionáveis espalhados pelo mapa, <br />
                            que podem ser encontrados e coletados pelo jogador. <br />
                            Cada <b className="font-bold">colecionável</b> possui uma descrição única, <br />
                            que pode ser acessada pelo <b className="font-bold">menu de colecionáveis.</b> <br />
                        </p>

                        <ul className="flex flex-row gap-0 mt-5">
                            <li className="justify-center items-center text-center gap-2">
                                <Figure className="animate__animated animate__fadeInLeft">
                                    <Figure.Image
                                        width={85}
                                        alt="secret_costume-1"
                                        src="/costume_1.png"
                                        rounded
                                        className="figureSpecial hover:scale-110 transition-all duration-200"
                                    />                          
                                </Figure>
                            </li>
                            <li className="justify-center items-center text-center gap-2">
                                <Figure className="animate__animated animate__fadeInLeft">
                                    <Figure.Image
                                        width={85}
                                        alt="secret_costume-2"
                                        src="/costume_2.png"
                                        rounded
                                        className="figureSpecial hover:scale-110 transition-all duration-200"
                                    />                                   
                                </Figure>
                            </li>
                            <li className="justify-center items-center text-center gap-2">
                                <Figure className="animate__animated animate__fadeInLeft">
                                    <Figure.Image
                                        width={85}
                                        alt="secret_costume-3"
                                        src="/costume_3.png"
                                        rounded
                                        className="figureSpecial hover:scale-110 transition-all duration-200"
                                    />                                   
                                </Figure>
                            </li>
                        </ul>
                    </section>
                </Col>
                <Col sm>
                    <Figure className="animate__animated animate__fadeIn lg:mt-36 lg:ml-24">
                        <Figure.Image
                            width={400}
                            alt="em breve Astral Wield"
                            src="/making1.jpg"
                            rounded
                        />
                    </Figure>
                </Col>
            </Row>
            <Row className="mt-5 lg:mt-2">
                <Col sm>
                    <section className="lg:ml-24 animate__animated animate__fadeInRight select-none mt-10 lg:mt-40 lg:mb-10">
                        <h1 className="font-lexend text-xl text-whiteTxt lowercase underline underline-offset-8 mb-3"> combate dinâmico: </h1>

                        <p className="font-jura font-light text-whiteTxt text-md lg:text-xl">
                            O combate de <b className="font-bold">Astral Wield</b> é <b className="font-bold">rápido</b> e <b className="font-bold">dinâmico</b>, <br />
                            com uma <b className="font-bold">variedade</b> de <b className="font-bold">inimigos</b> e <b className="font-bold">habilidades</b> para o jogador. <br />
                            <b className="font-bold">Astral Wield</b> conta com <b className="font-bold">diversas habilidades </b> para o jogador, <br />
                            que podem ser <b className="font-bold">desbloqueadas</b> e <b className="font-bold">melhoradas</b> ao longo do jogo. <br />
                        </p>
                    </section>
                </Col>

                <Col sm>
                    <Figure className="animate__animated animate__fadeInLeft lg:mt-36 lg:ml-24 lg:mb-10">
                        <Figure.Image
                            width={400}
                            alt="astralwield2"
                            src="/making2.jpg"
                            rounded
                        />
                    </Figure>
                </Col>
            </Row>
        </Container>
    )
}

export default Project_News