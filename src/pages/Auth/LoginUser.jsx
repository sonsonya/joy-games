import React, { useContext } from 'react'
import {Container, Row, Col, Form, Button, Card, Image} from 'react-bootstrap'
import { UserStoreContext } from '../../store/auth';
import { observer } from 'mobx-react';
import { Navigate } from 'react-router-dom'

const LoginUser = observer(() => {

    const userStore = useContext(UserStoreContext);
    if(!userStore.loginData) {
        userStore.loginData = {
            email: '',
            password: ''
        };
    }

    if(userStore.loginSuccess === true){
        return <Navigate to="/home"/>
    }
    return (
        <div style={{backgroundColor:'#E5E5E5', height: '100vh'}}>
            <Container stlye={{padding: '80px 42px'}}>
                <Row>
                    <div className="col-lg-6" style={{padding: '70px 0px'}}>
                        <Card.Img variant="top" style={{ padding: '40px'}} src={require("../../assets/images/illustrations.png")}/>
                    </div>
                    <div className="col-lg-6" style={{ margin: '42px 0px', padding: '44px 22px', backgroundColor:'#FFFFFF', boxShadow: '0px 0px 4px #000000cc',borderRadius: '8px'}}>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                            <div className="text-muted" style={{ fontStyle: 'normal', fontWeight: 400, fontSize: '36px', lineHeight: '135.5%', color: 'black', marginBottom: '50px'}}>
                                Welcome To<br></br>
                                <span style={{fontWeight: 700,color: '#6358DC'}}>Joy Games</span>
                            </div>
                            <div className="d-grid gap-2">
                            <Button style={{backgroundColor: 'white', borderColor: 'white', boxShadow: '0px 0px 2px #000000cc',borderRadius: '8px'}}>
                                <img style={{width: '32px', height: '32px', marginRight: '25px'}} src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png'></img>
                                <span className="buttonText" style={{color: 'black'}}>Sign in with Google</span>
                            </Button>
                            </div>
                            <div className="d-grid gap-2 mt-2 mb-4">
                            <Button style={{backgroundColor: 'white', borderColor: 'white', boxShadow: '0px 0px 2px #000000cc',borderRadius: '8px'}}>
                                <img style={{width: '32px', height: '32px', marginRight: '25px'}} src='https://e7.pngegg.com/pngimages/184/147/png-clipart-facebook-computer-icons-social-media-social-networking-service-scalable-graphics-facebook-f-logo-white-background-facebook-lite-logo-angle-text.png'></img>
                                <span className="buttonText" style={{color: 'black'}}>Sign in with Google</span>
                            </Button>
                            </div>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required onChange={(e) => {
                                        userStore.loginData.email = e.target.value;
                                    }} name="username" type="username" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required onChange={(e) => {
                                        userStore.loginData.password = e.target.value;
                                    }} name="password" type="password" placeholder="Password" />
                                </Form.Group>
                                <Row className="col-lg-12 d-flex flex-row">
                                    <Form.Group className="col-lg-6">
                                        <Form.Text className="text-muted">
                                        Remember me
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="col-lg-6 flex-end">
                                        <Form.Text className="text-muted">
                                        Forgot Password?
                                        </Form.Text>
                                    </Form.Group>
                                </Row>
                            </Form>
                            <div className="d-grid gap-2 mt-3">
                                <Button style={{backgroundColor: '#6358DC', height: '45px'}} onClick={(e)=> {
                                    userStore.handleLoginUser(e);
                                }} type="submit">Login</Button>
                            </div>
                            <div className="text-muted" style={{textAlign: 'center', marginTop: '47px', fontWeight: 400}}>
                                Don't have an account? <a href="/register" style={{color: '#6358DC'}}>Register</a>
                            </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    )
});

export default LoginUser;