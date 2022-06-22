import React from 'react'
import MainScreen  from '../components/MainScreen';
import Stakeholder  from '../components/Stakeholder';
import Video from '../components/Video';
import Upcoming from '../components/Upcoming';
import News from '../components/News';
import Investor from '../components/Investor';
import Footer from '../components/Footer';
import MyNavbar from '../components/MyNavbar';

class Home extends React.Component {
    render () {
        return (
            <div>
                <MyNavbar/>
               <MainScreen/>
               <Stakeholder/>
               <Video/>
               <Upcoming/>
               <News/>
               <Investor/>
               <Footer/>
            </div>
        )
    }
}


export default Home;