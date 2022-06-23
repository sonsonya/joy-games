import React from 'react'
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import { registerUser } from '../../redux/actions/user'
import { connect } from 'react-redux'

class Register extends React.Component {

    state = {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    }

    inputHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name] : value })
    }

    render () {
        console.log(this.props.user)
        if(this.props.user.success === true){
            return <Navigate to="/"/>
        }
        return (
            <div style={{backgroundColor:'#E5E5E5', height: '100vh'}}>
                <Container stlye={{padding: '80px 42px'}}>
                <Row className="col-lg-12">
                        <Col className="col-lg-6 col-md-12" style={{padding: '70px 0px'}}>
                        <Card.Img variant="top" src={require("../../assets/images/illustrations.png")}/>
                        </Col>
                        <Col className="col-lg-6 col-md-12" style={{ margin: '42px 0px', padding: '44px 52px', backgroundColor:'#FFFFFF', boxShadow: '0px 0px 4px #000000cc',borderRadius: '8px'}}>
                            <Row>
                                <Col></Col>
                                <Col xs={8}>
                                    <Form>
                                        <div className="text-muted" style={{ fontStyle: 'normal', fontWeight: 400, fontSize: '36px', lineHeight: '135.5%', color: 'black', marginBottom: '50px'}}>
                                            Welcome To<br></br>
                                            <span style={{fontWeight: 700,color: '#6358DC'}}>Joy Games</span>
                                        </div>
                                        {
                                            this.props.user.errMsg ?
                                            <div className='alert alert-danger'>{this.props.user.errMsg}</div>
                                            : null
                                        }
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control onChange={this.inputHandler} name="name" type="name" placeholder="Enter your username" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control onChange={this.inputHandler} name="email" type="email" placeholder="Enter your email address" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control onChange={this.inputHandler} name="password" type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control onChange={this.inputHandler} name="password_confirmation" type="password" placeholder="Confirm Password" />
                                        </Form.Group>
                                    </Form>
                                    <div className="d-grid gap-2 mt-3">
                                        <Button style={{backgroundColor: '#6358DC', height: '45px'}} type="submit" onClick={()=>this.props.registerUser(this.state)}>Sign In</Button>
                                    </div>
                                    <div className="text-muted" style={{textAlign: 'center', marginTop: '47px', fontWeight: 400}}>
                                        Already have an account? <a href="/" style={{color: '#6358DC'}}>Login</a>
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
    };
}

const mapDispatchToProps = {
    registerUser
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);