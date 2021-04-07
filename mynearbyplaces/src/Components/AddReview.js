import { Form, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import business_type from "./data";
import user_reviews from "./Reviews";

function AddReview(props) {
    const history = useHistory();
    const [reviewsList, setList] = useState(user_reviews)
    const [business, setBusiness] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');

    let onBusinessChange = (event) => {
        setBusiness(event.target.value)
    }

    let onNameChange = (event) => {
        setName(event.target.value)
    }

    let onDateChange = (event) => {
        setDate(event.target.value)
    }

    let onReviewChange = (event) => {
        setReview(event.target.value)
    }
    let onRatingChange = (event) => {
        setRating(event.target.value)
    }

    function handleAdd() {
        user_reviews.push({ id: user_reviews.length, business, name, date, review, rating });
        history.push('/');
    }
    return (
        <Row><Col>
            <Form onSubmit={handleAdd}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Review Information</Form.Label>
                    <Form.Control type="input" id="business" placeholder="Business Name: " onChange={onBusinessChange} />
                    <Form.Control type="input" id="name" placeholder="Full Name: " onChange={onNameChange} />
                    <Form.Control type="input" id="date" placeholder="Enter Date: " onChange={onDateChange} />
                    <Form.Control type="input" id="review" placeholder="Submit Review/Experience: " onChange={onReviewChange} />
                    <Form.Control type="input" id="rating" placeholder="Rating 1 of 5" onChange={onRatingChange} />
                    <br></br>
                </Form.Group>
                <Button variant="primary" type="submit"> Submit</Button>
            </Form>
        </Col></Row>
    );
}

export default AddReview;