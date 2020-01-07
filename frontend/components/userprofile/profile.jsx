import React from 'react';
import UserReservationIndexContainer from '../reservation/user_reservation_index_container';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = this.props.user;
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        debugger
        if(!this.props.user) return null;

        let user = this.props.user;

        return (
            <div className='middleit'>
                <div className='user-profile'>
                    <div className='user-detail'>
                        <span className= 'rest-prof-pos'>
                            <img className='user-profile-image' src="/user.png" alt=""/>
                            <h2>{user.first_name}</h2>
                        </span>
                    </div>
                </div>
                <UserReservationIndexContainer user={user}/>
            </div>
        )
    }


}

export default Profile