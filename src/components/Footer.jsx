import React from "react"

class Footer extends React.Component {

    render(){
        return(
            <div className="col-lg-12" style={{width: '100%', background: 'black', padding: '70px 120px'}}>
                <div className="d-flex flex-row justify-content-center">
                    <div className="col-lg-3">
                        <img
                            src={require('../assets/images/logo.png')}
                            className="d-inline-block align-top"
                            style={{width: '173px', height: '46.56px'}}
                        />
                        <div style={{marginTop: '24px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 700, fontSize: '18px', lineHeight: '22px', color: '#FFFFFF'}}>METAVERSE GAMING</div>
                        <div style={{marginTop: '10px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 100, fontSize: '14px', lineHeight: '22px', color: '#FFFFFF'}}>BY JOY GAME PLAYER</div>
                    </div>
                    <div className="col-lg-3">
                        <div style={{fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 700, fontSize: '18px', lineHeight: '22px', color: '#FFFFFF'}}>OUR SERVICES</div>
                        <div style={{marginTop: '43px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 100, fontSize: '14px', lineHeight: '22px', color: '#FFFFFF'}}>STORE</div>
                        <div style={{marginTop: '43px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 100, fontSize: '14px', lineHeight: '22px', color: '#FFFFFF'}}>GAMEBOX</div>
                        <div style={{marginTop: '43px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 100, fontSize: '14px', lineHeight: '22px', color: '#FFFFFF'}}>TOKEN</div>
                        <div style={{marginTop: '43px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 100, fontSize: '14px', lineHeight: '22px', color: '#FFFFFF'}}>STACKING</div>
                        <div style={{marginTop: '43px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 100, fontSize: '14px', lineHeight: '22px', color: '#FFFFFF'}}>DOCS</div>
                    </div>
                    <div className="col-lg-3">
                        <div style={{fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 700, fontSize: '18px', lineHeight: '22px', color: '#FFFFFF'}}>HELP</div>
                        <div style={{marginTop: '43px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 100, fontSize: '14px', lineHeight: '22px', color: '#FFFFFF'}}>HELP</div>
                        <div style={{marginTop: '43px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 100, fontSize: '14px', lineHeight: '22px', color: '#FFFFFF'}}>FAQs</div>
                        <div style={{marginTop: '43px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 100, fontSize: '14px', lineHeight: '22px', color: '#FFFFFF'}}>CONTACT</div>
                    </div>
                    <div className="col-lg-3">
                        <div style={{fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 700, fontSize: '18px', lineHeight: '22px', color: '#FFFFFF'}}>JOIN OUR COMMUNITY</div>

                    </div>
                </div>
                <div style={{textAlign: 'center', marginTop: '91px', fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '22px', color: '#FFFFFF'}}><span>© 2022 Joy Games</span> | <span>Terms & Conditions</span> | <span>Privacy Policy</span></div>
            </div>
        )
    }
}

export default Footer;