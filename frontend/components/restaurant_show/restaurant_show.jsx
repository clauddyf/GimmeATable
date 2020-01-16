import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";
import ReservationContainer from '../reservation/reservation_container';
import ReviewComposeContainer from '../reviews/reviews_compose_container';
import ReviewIndexContainer from '../reviews/review_index_container';

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)
        debugger
        // this.state = {
        //     restaurant: this.props.restaurant.restaurant
        // }
    }
    
    componentDidMount(){
        debugger
        this.props.fetchRestaurant(this.props.match.params.restId)
        // .then(restaurants => {
        //     this.setState({
        //         restaurants:restaurants
        //     })
        // })
    }

    // componentWillReceiveProps(nextProps) {
    //     debugger
    //     this.setState({
    //         restaurant: nextProps.restaurant.restaurant
    //     })
    // }

    componentDidUpdate(prevState) {
        debugger
        if (prevState.match.params.restId !== this.props.match.params.restId) {
            this.props.fetchRestaurant(this.props.match.params.restId)
        }
    }
    
    render(){
        let restaurant = this.props.restaurant ? this.props.restaurant.restaurant : '';
        let restReviews = this.props.restaurant ? this.props.restaurant: '';
        debugger
        
        if (restaurant.open === 24) {
          open = `12:00 AM`;
        } else if (restaurant.open > 12) {
          open = `${(restaurant.open - 12)}:00 PM`;
        } else if (restaurant.open === 12) {
            open = `12:00 PM`
        } else { open = `${(restaurant.open)}:00 AM`; }
    
        
        if (restaurant.close === 24) {
          close = `12:00 AM`;
        } else if (restaurant.close > 12) {
          close = `${(restaurant.close - 12)}:00 PM`;
        } else { close = `${(restaurant.close)}:00 AM`; }
        // if (this.props.restaurant.restaurant === undefined) return null; 
        let happyhour;
        if ((restaurant.id) % 2 !== 0 && (restaurant.id) < 35) {
            happyhour = (
                <div className='din-style'>
                    5pm-8pm
                </div>
            )
        } else {
            happyhour = (
                <div className='din-style'>
                    6pm-8:30pm
                </div>
            )
        }

        return(
            <div className='rest-page'>
                <div className='waffles'>
                    {/* <img className= 'waffy' src='https://gimmeatable-dev.s3-us-west-1.amazonaws.com/rest_show.jpg' alt=""/> */}
                </div>
                <div className='rest-body'>
                    <aside className='right-side'>
                        <div className='baby-right-side'>
                            <div className='rest-reserve-container'>
                                <div className='res-container-header'>Make a reservation</div>
                                <div className='reserve-form'>
                                    <ReservationContainer restaurant={restaurant} currentUser={this.props.currentUser} />
                                </div>
                            </div>
                            <div className='dresscode'>
                                <div className='baby-dress'>
                                    <span className='side-nav-type'>Dresscode</span>
                                    <div className='act-dress'>
                                        {restaurant.dresscode}
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className='dresscode'>
                                <span className='side-nav-type'>Dining Style</span>
                                <div className='din-style'>
                                    <span>Casual Elegant</span>
                                </div>
                            </div>
                            <hr/>
                            <div className='dresscode'>
                                <span className='side-nav-type'>Cuisine-Type</span>
                                <div className= 'din-style'>
                                    <span>{restaurant.cuisine_type}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className='dresscode'>
                                <span className='side-nav-type'>Happy-Hour</span>
                                <div className='happy-hour'>
                                    <span>{happyhour}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className='dresscode'>
                                <span className='side-nav-type'>Neighborhood</span>
                                <div className='din-style'>
                                    <span>{restaurant.neighborhood}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className='dresscode'>
                                <span className='side-nav-type'>Payment Options</span>
                                <div className='din-style'>
                                    Visa,Mastercard,Discover,AMEX
                                </div>
                            </div>
                            <hr/>
                            <div className='dresscode'>
                                <span className='side-nav-type'>Hours of Operation</span>
                                <div className='din-style'>
                                    <span>{restaurant.hours_op}</span>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </aside>
                    <div className='ove-sect' >
                      <div className='rest-nav-bar'>
                          <ul className='nav-info'>
                              <Link id='overview-link'>
                                  <div>Overview</div>
                              </Link>
                              <Link id='photos-link'>
                                  <div>Photos</div>
                              </Link>
                              <Link id='info-link'>
                                <div>Daily Info</div>
                              </Link>
                              <Link id='reviews-link'>
                                <div>Reviews</div>
                              </Link>
                          </ul>
                      </div>
                      <hr/>
                      <div className='name-body'>
                        <h1 className='rest-name'>{restaurant.name}</h1>
                      </div>
                        <div className='rest-show-overview' id='overview-link'>
                            <div className='rest-section-title'>
                                Overview
                            </div>
                            <div className='desc-div'>
                                {restaurant.description}
                            </div>
                        </div>
                        <hr/>
                      <div className='rest-show-photos' id='photos-link'>
                        <div className='rest-section-title'>  
                            Photos
                        </div>
                        <div className='photos-div'>
                            <img src={restaurant.photoUrls} alt=""/>
                        </div>
                      </div>
                      <hr/>
                      <div className='rest-show-info' id='info-link'>
                        <div className='rest-section-title'>
                            Daily Info
                        </div>
                        <div className='info-div'>
                            <div className='rest-info-div'>
                                <span>
                                    PhoneNumber:{restaurant.phone_num}
                                </span>
                            </div>
                            <div className='rest-info-div'>
                                Addy: {restaurant.address}
                            </div>
                            <div className='rest-info-div'>
                                Neighborhood: {restaurant.neighborhood}
                            </div>
                            <div className='rest-info-div'>
                                Hours of Operation: {restaurant.hours_op}
                            </div>
                        </div>
                      </div>
                      <hr/>
                      <div className='rest-show-reviews' id='reviews-link'>
                        <div className='rest-section-title'>
                            Reviews
                        </div>
                        <div>
                            <ReviewIndexContainer type={'restaurant'} reviews={restReviews.reviews}/>
                        </div>
                        <div>
                            <ReviewComposeContainer restaurant={restaurant}/>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantShow;
{/* <div className='ratings-bar'>
    <div className='rte-bar-child'>
        <ul className='rev-bar'>
            <li className='rev-icon'>
                
            </li>
            <li className='c-type'>
                <span className='c-type'>{this.props.restaurant.num_of_views}</span>
                <span className='c-type'> Reviews</span>
            </li>
            
            <li className='ctype-icon'>
                
            </li>
            <li className='c-type'>
                <span className='c-type'>{this.props.restaurant.cuisine_type}</span>
            </li>
        </ul>
    </div>
</div> */}