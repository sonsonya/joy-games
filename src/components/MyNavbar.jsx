import React from 'react'
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap'
import { logoutUser } from '../redux/actions/user'
import { connect } from 'react-redux'

class MyNavbar extends React.Component {

    render () {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/3cd22c87-aa06-45cb-95fe-259076163ba6"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />{' '}
                        HDI
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            {
                                this.props.register.username ?
                                <>
                                <Navbar.Text style={{ margin: '0px 20px'}}>
                                    Hallo, {this.props.register.fullname}
                                </Navbar.Text>
                                <Dropdown>
                                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                    Menu
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Cart</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">History</Dropdown.Item>
                                    <Dropdown.Item onClick={this.props.logoutUser}>Log Out</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                                </> :
                                <>
                                <Nav.Link href="/products">Katalog</Nav.Link>
                                <Nav.Link href="/contact">Hubungi Kami</Nav.Link>
                                <Button href="/login" variant="danger">Log In</Button>
                                </>
                            }
                            
                        </Nav>
                        
                        
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        register : state.user
    }
}

const mapDispatchToProps = {
    logoutUser,
}

export default connect(mapStateToProps,mapDispatchToProps)(MyNavbar);