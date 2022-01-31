import React from 'react'
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
import { loginUser } from "../../redux/actions/user"
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

class Login extends React.Component {

    state = {
        username: "",
        password: "",
    }

    inputHandler = (event) => {
        const name = event.target.name
        const value = event.target.value

        this.setState({ [name] : value})
    }

    render () {
        if(this.props.user.id){
            if(this.props.role === 'user'){
                return <Navigate to="/products"/>
            } else {
                return <Navigate to="/admin"/>
            }
        }
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col>
                            <Card.Img variant="top" src="https://s1.bukalapak.com/img/64841886902/large/PROMO_PROPOELIX_HDI_60_KAPSUL_BELI_2_BOX_GRATIS_1.jpg"/>
                        </Col>
                        <Col style={{ margin: '200px 0px'}}>
                            <Row>
                                <Col></Col>
                                <Col xs={8}>
                                <Form>
                                    {
                                        this.props.user.errMsg ?
                                        <div className='alert alert-danger'>{this.props.user.errMsg}</div>
                                        : null
                                    }
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control onChange={this.inputHandler} name="username" type="username" placeholder="Enter username" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={this.inputHandler} name="password" type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Text className="text-muted">
                                        Belum memiliki akun? <a href="/register">Daftar disini</a>
                                        </Form.Text>
                                    </Form.Group>
                                </Form>
                                <div className="d-grid gap-2 mt-3">
                                    <Button variant="danger" onClick={()=> this.props.loginUser(this.state)} type="submit">Login</Button>
                                </div>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    loginUser
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);