import React from 'react'

class Video extends React.Component {
    render(){
        return(
            <div>
                <img
                    src={require('../assets/images/video.png')}
                    width="100%"
                    height="589px"
                    style={{marginBottom: -1}}
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </div>
        )
    }
}

export default Video;