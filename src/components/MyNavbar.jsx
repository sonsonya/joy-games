import React from 'react'
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap'
import { logoutUser } from '../redux/actions/user'
import { connect } from 'react-redux'

class MyNavbar extends React.Component {

    render () {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{height:'113px'}}>
                    <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={require('../assets/images/logo.png')}
                            width="173px"
                            height="46.56px"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
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
                                <Nav.Link href="">ABOUT</Nav.Link>
                                <Nav.Link href="">STORE</Nav.Link>
                                <Nav.Link href="">GAMEBOX</Nav.Link>
                                <Nav.Link href="">TOKEN</Nav.Link>
                                <Nav.Link href="">STAKING</Nav.Link>
                                <Nav.Link href="">DOCS</Nav.Link>
                                <Nav.Link href="">REGISTER</Nav.Link>
                                <Button href="/login" style={{width: '158px', backgroundColor: '#5D5FEF',boxShadow: '0px 0px 4px 4px #0bceff4d',borderRadius: '30px'}}>LOGIN</Button>
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