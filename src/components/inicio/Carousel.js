import React from 'react';
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import  imagenUno  from "../../assets/images/imagenUno.PNG";


function Carrousel() {
  return (
    <>
        <Carousel>
                <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={imagenUno}
                    alt="First slide"
                />
                <Carousel.Caption>
                    {/* Aca se le puede poner texto que puede aparecer en las imagenes */}
                    {/* <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={imagenUno}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    {/* Aca se le puede poner texto que puede aparecer en las imagenes */}
                    {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagenUno}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    {/* Aca se le puede poner texto que puede aparecer en las imagenes */}
                    {/* <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    </>
  )  

}

export default Carrousel