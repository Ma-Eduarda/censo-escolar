import { Carousel } from "react-bootstrap";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const Carrossel = () => {
    return (
        <div className=" mb-5">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }} >
                        <h1>Censo Escolar da Educação Básica</h1>
                        <p>A principal pesquisa estatística educacional do Brasil.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                        <h1>Censo Escolar da Educação Básica</h1>
                        <p>A principal pesquisa estatística educacional do Brasil.</p>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                        <h1>Censo Escolar da Educação Básica</h1>
                        <p>A principal pesquisa estatística educacional do Brasil.</p>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Carrossel;
