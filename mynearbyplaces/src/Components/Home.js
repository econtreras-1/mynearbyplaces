import { Card, CardGroup, CardDeck, CardColumns, ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import business from './data'
import api from "../communication/api"


function Home() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        if (places.length == 0) {
            api.getPlaces()
                .then(x => setPlaces(x))
                .catch(e => console.log(e));
        }
    })

    const cardsArray = business.map(business => (

        <Card>
            <div class="text-center">{business.name}</div>
            <img class="card-img-top" src={business.image} alt="Restaurant Image" />
            <div class="text-center">{business.address}</div>

            <Link to={
                {
                    pathname: '/edit',
                    state: { id: business.id },
                }
            }> <Button>Edit</Button></Link>

            <Link to={
                {
                    pathname: '/delete',
                    state: { id: business.id },
                }
            }> <Button>Delete</Button></Link>

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