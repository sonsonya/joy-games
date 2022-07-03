import React, { useContext } from 'react'
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
import { observer } from 'mobx-react';
import { UserStoreContext } from '../../store/auth';
import { Navigate } from 'react-router-dom'

const RegisterUser = observer(() => {

    const userStore = useContext(UserStoreContext);
    if(!userStore.registerData) {
        userStore.registerData = {
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        };
    }

    if(userStore.registerSuccess === true){
        return <Navigate to="/"/>
    }
    return (
        <div style={{backgroundColor:'#E5E5E5', height: '100vh'}}>
            <Container stlye={{padding: '80px 42px'}}>
                <Row>
                    <div className="col-lg-6 col-md-12" style={{padding: '70px 0px'}}>
                        <Card.Img variant="top" style={{ padding: '40px'}} src={require("../../assets/images/illustrations.png")}/>
                    </div>
                    <div className="col-lg-6 col-md-12" style={{ margin: '42px 0px', padding: '44px 22px', backgroundColor:'#FFFFFF', boxShadow: '0px 0px 4px #000000cc',borderRadius: '8px'}}>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <Form>
                                    <div className="text-muted" style={{ fontStyle: 'normal', fontWeight: 400, fontSize: '36px', lineHeight: '135.5%', color: 'black', marginBottom: '50px'}}>
                                        Welcome To<br></br>
                                        <span style={{fontWeight: 700,color: '#6358DC'}}>Joy Games</span>
                                    </div>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control required value={userStore.registerData?.name}
                                        onChange={(e) => {
                                            userStore.registerData.name = e.target.value;
                                        }} name="name" type="name" placeholder="Enter your username" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control required value={userStore.registerData?.email}
                                        onChange={(e) => {
                                            userStore.registerData.email = e.target.value;
                                        }} name="email" type="email" placeholder="Enter your email address" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control required value={userStore.registerData?.password}
                                        onChange={(e) => {
                                            userStore.registerData.password = e.target.value;
                                        }} name="password" type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control required value={userStore.registerData?.password_confirmation}
                                        onChange={(e) => {
                                            userStore.registerData.password_confirmation = e.target.value;
                                        }} name="password_confirmation" type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                </Form>
                                <div className="d-grid gap-2 mt-3">
                                    <Button style={{backgroundColor: '#6358DC', height: '45px'}} type="submit" onClick={(e) => {
                                        userStore.handleRegisterUser(e);
                                    }}>Sign In</Button>
                                </div>
                                <div className="text-muted" style={{textAlign: 'center', marginTop: '47px', fontWeight: 400}}>
                                    Already have an account? <a href="/" style={{color: '#6358DC'}}>Login</a>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    )
})

export default RegisterUser;