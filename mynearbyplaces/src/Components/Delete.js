import { Form, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import business_type from "./data";


function Delete(props) {
    let location = useLocation();
    const history = useHistory();

    function handleDelete() {
        for (var i = 0; i < business_type.length; i++) {
            if (location.state.id === business_type[i].id) {
                business_type.splice(i, 1);
            }
        }
        history.push('/');
    }


    return (
        <Row><Col>
            <Form onSubmit={handleDelete}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Would you like to delete?</Form.Label>
                    <br></br>
                </Form.Group>
                <Button variant="primary" type="submit">Delete Business</Button>
            </Form>
        </Col></Row>
    );
}

export default Delete;