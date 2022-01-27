import React from 'react'
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
import Axios from 'axios'
import { API_URL } from '../../constans/API.js'
import { registerUser } from '../../redux/actions/user'
import { connect } from 'react-redux'

class Register extends React.Component {

    state = {
        fullname: "",
        username: "",
        email: "",
        password: ""
    }

    inputHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name] : value })
    }

    render () {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col>
                            <Card.Img variant="top" src="https://fastcdn.benihbaik.com/news/detail/benihbaik_2020-12-11_1607701328713.jpeg"/>
                        </Col>
                        <Col style={{ margin: '100px 0px'}}>
                            <Row>
                                <Col></Col>
                                <Col xs={8}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Fullname</Form.Label>
                                            <Form.Control onChange={this.inputHandler} name="fullname" type="fullname" placeholder="Enter your fullname" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control onChange={this.inputHandler} name="username" type="username" placeholder="Enter your username" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control onChange={this.inputHandler} name="email" type="email" placeholder="Enter your email address" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control onChange={this.inputHandler} name="password" type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Text className="text-muted">
                                            Sudah memiliki akun? <a href="/login">Login disini</a>
                                            </Form.Text>
                                        </Form.Group>
                                    </Form>
                                    <div className="d-grid gap-2 mt-3">
                                        <Button variant="danger" type="submit" onClick={()=>this.props.registerUser(this.state)}>Sign In</Button>
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

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = {
    registerUser
}

export default connect(null,mapDispatchToProps)(Register);