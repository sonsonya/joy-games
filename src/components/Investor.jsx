import React from 'react'

class Investor extends React.Component {
    render(){
        return(
            <div className="col-lg-12 d-flex flex-column align-items-center justify-content-between" style={{width: '100%', backgroundColor: '#242424', padding: '87px 156px'}}>
                <img
                    src={require('../assets/images/subtitle-3.png')}
                    width="586px"
                    height="74px"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <img
                    src={require('../assets/logo/investor.png')}
                    width="100%"
                    height="780px"
                    style={{marginTop: '70px'}}
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </div>
        )
    }
}

export default Investor;