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
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [business_type, setBusiness] = useState('');
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
        user_reviews.push({ id: user_reviews.length, name, business_type, review, rating });
        history.push('/');
    }
    return (
        <Row><Col>
            <Form onSubmit={handleAdd}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Review Information</Form.Label>
                    <Form.Control type="input" id="name" placeholder="Full Name: " onChange={onNameChange} />
                    <Form.Control type="input" id="business_type" placeholder="Business Name: " onChange={onBusinessChange} />
                    <Form.Control type="input" id="review" placeholder="Submit Review/Experience: " onChange={onReviewChange} />
                    <Form.Control type="input" id="rating" placeholder="Rating 1 of 5" onChange={onRatingChange} />
                    <br></br>
                </Form.Group>
                <Button variant="primary" type="submit"> Submit</Button>
            </Form>
        </Col></Row>
    );
}

export default Add_Review;