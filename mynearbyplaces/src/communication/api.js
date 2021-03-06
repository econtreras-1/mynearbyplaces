let apiHost = "https://econtreras-1-mynearbyplaces.herokuapp.com"

let getPlaces = () => {
    return fetch(apiHost + '/places')
    .then (response => response.json());
}

let getReviews = () => {
    return fetch(apiHost + '/reviews')
    .then (response => response.json());
}

let addPlace = (place) => {
    return fetch(apiHost + '/addPlace', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

let addReview = (place) => {
    return fetch(apiHost + '/addReview', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

let deletePlace = (place) => {
    return fetch(apiHost + '/deletePlace', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

let editPlace = (place) => {
    return fetch(apiHost + '/editPlace', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}




let api = {
    getPlaces : getPlaces,
    getReviews : getReviews,
    addPlace : addPlace,
    deletePlace : deletePlace,
    editPlace : editPlace,
    addReview : addReview
};

export default api;