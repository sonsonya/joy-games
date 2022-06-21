import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap'

class News extends React.Component {
    render(){
        return(
             <div className="col-lg-12 d-flex flex-column align-items-center justify-content-center" style={{width: '100%', background: 'black', padding: '80px 74px'}}>
                <img
                    src={require('../assets/images/subtitle-2.png')}
                    width="138px"
                    height="74px"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <div style={{margin: '36px 245px 66px 245px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '35px', textAlign: 'center',color: '#FFFFFF'}}>Eclipse to the world of the end of our story Inside</div>
                <Carousel variant="dark">
                    <Carousel.Item interval={2000}>
                    <a href='/login'>
                        <img
                        className="d-block"
                        src={require('../assets/images/news-1.png')}
                        alt="First slide"
                        style={{width: '856px',height: '362px'}}
                        />
                    </a>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                    <a href='/'>
                        <img
                        className="d-block"
                        src={require('../assets/images/news-1.png')}
                        alt="Second slide"
                        style={{width: '856px',height: '362px'}}
                        />
                    </a>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                    <a href='/'>
                        <img
                        className="d-block"
                        src={require('../assets/images/news-1.png')}
                        alt="Third slide"
                        style={{width: '856px',height: '362px'}}
                        />
                    </a>
                    </Carousel.Item>
                </Carousel>
                <Button style={{marginTop: '80px', width: '287px', height: '68px', backgroundColor: '#5D5FEF',boxShadow: '0px 0px 4px 4px #0bceff4d',borderRadius: '30px'}}>VIEW ALL</Button>
            </div>
        )
    }
}

export default News;