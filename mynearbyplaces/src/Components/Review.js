import { Card, CardGroup, CardDeck, CardColumns, ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import business_type from './data'
import user_reviews from './Reviews'
function Review() {

    const cardsArray = user_reviews.map(user_reviews => (
        <Card>
            <div class="text-center">{user_reviews.business}</div>
            <div class="text-center">{user_reviews.name}</div>
            <div class="text-center">"{user_reviews.review}"</div>
            <div class="text-center">{user_reviews.rating}/5</div>
        </Card>
    )
    );


    return (
        <div>
            <CardDeck>
                {cardsArray}
            </CardDeck>

        </div>
    )
};
export default Review;