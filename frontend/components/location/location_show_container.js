import { connect } from 'react-redux';
import { fetchLocation } from '../../actions/location_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions'
import LocationShow from '../location/location_show';


const mSTP = (state, ownProps) => ({
    location: state.entities.locations[ownProps.match.params.locId],
    // restaurants: state.entities.restaurants[ownProps.match.params.id]
})

const mDTP = dispatch => ({
    fetchLocation: (location) => dispatch(fetchLocation(location)),
    fetchRestaurants: (locId) => dispatch(fetchRestaurants(locId))
})

export default connect(mSTP,mDTP)(LocationShow)

