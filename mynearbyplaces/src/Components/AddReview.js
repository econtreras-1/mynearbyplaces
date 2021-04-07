import { Form, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import business from "./data";
import reviews from "./reviews";

function AddReview(props) {
    const history = useHistory();
    const [reviewsList, setList] = useState(reviews)
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [business, setBusiness] = useState('');
    const [rating, setRating] = useState('');


    let onNameChange = (event) => {
        setName(event.target.value)
    }

    let onBusinessChange = (event) => {
        setBusiness(event.target.value)
    }

    let onReviewChange = (event) => {
        setReview(event.target.value)
    }
    let onRatingChange = (event) => {
        setRating(event.target.value)
    }

    function handleAdd() {
        reviews.push({ id: reviews.length, name, business, review, rating });
        history.push('/');
    }
    return (
        <Row><Col>
            <Form onSubmit={handleAdd}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Review Submission</Form.Label>
                    <Form.Control type="input" id="name" placeholder="Full Name" onChange={onNameChange} />
                    <Form.Control type="input" id="business" placeholder="Restaurant Visited" onChange={onBusinessChange} />
                    <Form.Control type="input" id="review" placeholder="Review/Comments" onChange={onReviewChange} />
                    <Form.Control type="input" id="rating" placeholder="Rating: 1 - 5" onChange={onRatingChange} />
                    <br></br>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Col></Row>
    );
}

export default AddReview;