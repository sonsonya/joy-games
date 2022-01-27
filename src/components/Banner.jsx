import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

class Banner extends React.Component {
    render(){
        return(
            <div>
                <Carousel variant="dark">
                    <Carousel.Item interval={2000}>
                    <a href='/login'>
                        <img
                        className="d-block w-100"
                        src="https://www.hdistore.com/img/asset/doble%20haney-01.jpg"
                        alt="First slide"
                        />
                    </a>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                    <a href='/'>
                        <img
                        className="d-block w-100"
                        src="https://www.hdistore.com/img/asset/slide-superbooster2.jpg"
                        alt="Second slide"
                        />
                    </a>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                    <a href='/'>
                        <img
                        className="d-block w-100"
                        src="https://www.hdistore.com/img/asset/slide-agpromo2.jpg"
                        alt="Third slide"
                        />
                    </a>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Banner;