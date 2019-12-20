import React from 'react';
import { Link } from 'react-router-dom';
import ReservationContainer from '../reservation/reservation_container';

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restId)
    }
    
    render(){
        const restaurant = this.props.restaurant.restaurant;
        // debugger
        
        let open;
        if (restaurant.open === 24) {
          open = `12:00 AM`;
        } else if (restaurant.open > 12) {
          open = `${(restaurant.open - 12)}:00 PM`;
        } else if (restaurant.open === 12) {
            open = `12:00 PM`
        } else { open = `${(restaurant.open)}:00 AM`; }
    
        let close;
        if (restaurant.close === 24) {
          close = `12:00 AM`;
        } else if (restaurant.close > 12) {
          close = `${(restaurant.close - 12)}:00 PM`;
        } else { close = `${(restaurant.close)}:00 AM`; }
        if (this.props.restaurant === undefined) return null; 

        return(
            <div className='rest-page'>
                <div className='waffles'>
                    <img className= 'waffy' src={this.props.restaurant.photoUrls} alt=""/>
                </div>
                <div className='rest-body'>
                    <aside className='right-side'>
                        <div className='baby-right-side'>
                            <div className='dresscode'>
                                <div className='baby-dress'>
                                    <span>Dresscode</span>
                                    <div className='act-dress'>
                                        {this.props.restaurant.dresscode}
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className='baby-din-style'>
                                <span>Dining Style</span>
                                <div className='din-style'>
                                    <span>{this.props.restaurant.dining_style}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className='baby-cuise'>
                                <span>Cuisine-Type</span>
                                <div className= 'din-style'>
                                    <span>{this.props.restaurant.cuisine_type}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className='baby-happy'>
                                <span>Happy-Hour</span>
                                <div className='happy-hour'>
                                    <span>{this.props.restaurant.happy_hour}</span>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </aside>
                    <div className='ove-sect' >
                      <div className='rest-nav-bar'>
                          <ul className='nav-info'>
                              <li id='overview-link'>
                                  <a className='ov-l' href=""><span>Overview</span></a>
                              </li>
                              <li id='photos-link'>
                                  <a className='ov-l' href=""><span>Photos</span></a>
                              </li>
                              <li id='menu-link'>
                                <a className='ov-l'href=""><span>Menu</span></a>
                              </li>
                              <li id='reviews-link'>
                                <a className='ov-l'href=""><span>Reviews</span></a>
                              </li>
                          </ul>
                      </div>
                      <hr/>
                      <div className='name-body'>
                        <h1 className='rest-name'>{this.props.restaurant.name}</h1>
                        <hr/>
                        <div className='ratings-bar'>
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
                        </div>
                      </div>
                      <div className='desc-div' >
                        <div >
                            {this.props.restaurant.description}
                        </div>
                      </div>
                      <div className='reserve=form'>
                        <ReservationContainer restaurant={restaurant} currentUser={this.props.currentUser} />
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantShow;