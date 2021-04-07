import { Card, CardGroup, CardDeck, CardColumns, ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import business_type from "./data";



function Home() {
    const cardsArray = business_type.map(business_type => (

        <Card>
            <div class="text-center">{business_type.name}</div>
            <img class="card-img-top" src={business_type.image} alt="Business Image" />
            <div class="text-center">{business_type.address}</div>
            <Link to={
                {
                    pathname: '/delete',
                    state: { id: business_type.id },
                }
            }>
                <Button>Delete</Button></Link>


            <Link to={
                { pathname: '/edit', state: { id: business_type.id } }
            }>
                <Button>Edit</Button></Link>

        </Card>
    )
    );


    return (
        <div>
            <CardGroup>
                {cardsArray}
            </CardGroup>

        </div>
    )
};
export default Home;