import React from 'react'

class Stakeholder extends React.Component {
    render(){
        return(
            <div className="col-lg-12 d-flex flex-row align-items-center justify-content-between" style={{width: '100%', height: '237px', backgroundColor: '#14182C', padding: '87px 156px'}}>
                <div className="col-lg-3">
                    <img
                        src={require('../assets/logo/logo-candy.png')}
                        className="d-inline-block align-top"
                        style={{width: '188px', height: '74px'}}
                    />
                </div>
                <div className="col-lg-3">
                    <img
                        src={require('../assets/logo/logo-lemon-studio.png')}
                        className="d-inline-block align-top"
                        style={{width: '100px', height: '103px'}}
                    />
                </div>
                <div className="col-lg-3">
                    <img
                        src={require('../assets/logo/logo-jeric-verse.png')}
                        className="d-inline-block align-top"
                        style={{width: '188px', height: '30px'}}
                    />
                </div>
                <div className="col-lg-3">
                    <img
                        src={require('../assets/logo/logo-game-economy.png')}
                        className="d-inline-block align-top"
                        style={{width: '239px', height: '63px'}}
                    />
                </div>
            </div>
        )
    }
}

export default Stakeholder;