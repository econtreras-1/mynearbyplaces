import { Form, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import business_type from "./data";

function Edit(props) {
    const history = useHistory();
    let location = useLocation();
    const [businessList, setList] = useState(business_type)
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [address, setAddress] = useState('');

    let onNameChange = (event) => {
        setName(event.target.value)
    }

    let onAddressChange = (event) => {
        setAddress(event.target.value)
    }

    let onImageChange = (event) => {
        setImage(event.target.value)
    }
    function handleEdit() {
        for (var i = 0; i < business_type.length; i++) {
            if (location.state.id === business_type[i].id) {
                business_type[i].name = name;
                business_type[i].address = address;
                business_type[i].image = image;
            }
        }
        history.push('/');
    }
    return (
        <Row><Col>
            <Form onSubmit={handleEdit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Business_type Info</Form.Label>
                    <Form.Control type="input" id="name" placeholder="Enter Name" onChange={onNameChange} />
                    <Form.Control type="input" id="address" placeholder="Enter Address" onChange={onAddressChange} />
                    <Form.Control type="input" id="image" placeholder="Enter image link" onChange={onImageChange} />
                    <br></br>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Col></Row>
    );
}

export default Edit;