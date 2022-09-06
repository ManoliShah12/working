import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './signUp.css'

 export const FinalLogIn = () => {

    return(
        <div className="card_style">
    <center>
        <Card >
            <Form className="card_design">
                <Form.Group>
                    <Form.Label>UserName:</Form.Label>
                    <Form.Control type='text' placeholder='First-Name'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type='text' placeholder='Password'></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                 Submit
                </Button>
            </Form>
        </Card>
        </center>
        </div>
    )
}




