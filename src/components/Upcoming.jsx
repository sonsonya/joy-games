import React from 'react'
import { Button } from 'react-bootstrap'

class MainScreen extends React.Component {
    render(){
        return(
            <div className="col-lg-12 d-flex flex-column align-items-center justify-content-center" style={{width: '100%', backgroundColor: '#14182C', padding: '80px 74px'}}>
                <img
                    src={require('../assets/images/subtitle.png')}
                    width="455px"
                    height="74px"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <div style={{margin: '36px 245px 66px 245px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '35px', textAlign: 'center',color: '#FFFFFF'}}>Joy Games aims to not just create a platform but also will play an active role in the development and curation of gaming content on the platform, the upkeep of the codebase, and the development of new exciting ways to implement gamified finance into existing or new games, via a mixture of of inhouse development or co-development with our strategic partners, who are experienced and successful game development studios.</div>
                <div className='d-flex flex-row justify-space-between'>
                    <div className="col-lg-4 m-2 mb-4">
                        <img
                            src={require('../assets/images/games-1.png')}
                            className="d-inline-block align-top"
                            style={{width: '417px', height: '417px'}}
                        />
                    </div>
                    <div className="col-lg-4 m-2 mb-4">
                        <img
                            src={require('../assets/images/games-2.png')}
                            className="d-inline-block align-top"
                            style={{width: '417px', height: '417px'}}
                        />
                    </div>
                    <div className="col-lg-4 m-2 mb-4">
                        <img
                            src={require('../assets/images/games-3.png')}
                            className="d-inline-block align-top"
                            style={{width: '417px', height: '417px'}}
                        />
                    </div>
                </div>
                <div className='d-flex flex-row justify-space-between'>
                    <div className="col-lg-4 m-2 mt-4">
                        <img
                            src={require('../assets/images/games-4.png')}
                            className="d-inline-block align-top"
                            style={{width: '417px', height: '417px'}}
                        />
                    </div>
                    <div className="col-lg-4 m-2 mt-4">
                        <img
                            src={require('../assets/images/games-5.png')}
                            className="d-inline-block align-top"
                            style={{width: '417px', height: '417px'}}
                        />
                    </div>
                    <div className="col-lg-4 m-2 mt-4">
                        <img
                            src={require('../assets/images/games-6.png')}
                            className="d-inline-block align-top"
                            style={{width: '417px', height: '417px'}}
                        />
                    </div>
                </div>
                <Button style={{marginTop: '80px', width: '287px', height: '68px', backgroundColor: '#5D5FEF',boxShadow: '0px 0px 4px 4px #0bceff4d',borderRadius: '30px'}}>VIEW MORE</Button>
            </div>
        )
    }
}

export default MainScreen;