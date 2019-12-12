import * as APIUtil from '../util/restaurant_api_utl';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';


export const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants,
});

export const receiveRestaurant = ({ restaurant }) => ({
    type: RECEIVE_RESTAURANT,
    restaurant
});

export const fetchRestaurants = () => dispatch => (
    APIUtil.fetchRestaurants().then(restaurants => dispatch(receiveRestaurants(restaurants)))
)
export const fetchRestaurant = restId => dispatch => (
    APIUtil.fetchRestaurant(restId).then(restId => dispatch(receiveRestaurant(restId)))
)