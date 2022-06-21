import React from 'react'

class MainScreen extends React.Component {
    render(){
        return(
            <div>
                <img
                    src={require('../assets/images/main-picture.png')}
                    width="100%"
                    height="780px"
                    style={{marginTop:-92}}
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </div>
        )
    }
}

export default MainScreen;