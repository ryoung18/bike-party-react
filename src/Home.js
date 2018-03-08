import React, { Component } from 'react';
import UserAccessForm from './UserAccessForm';
import { getMeetupInfo } from './actions/eventActions';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount(){
    this.props.getMeetupInfo();
  }

  render() {
<<<<<<< HEAD
    let {date, time, start_location, end_location, users : attendees, isLoggedIn } = this.props.events;
=======
    let {date, time, start_location, end_location, users : attendees, isLoggedIn } = this.props;
>>>>>>> 1f33e0337fb05f0d5e62a53fce639b3ca6ead6ba

    attendees = attendees.map(attendee => <li key={attendee.id}> {attendee.username} </li>)

    return (
      <div>
        { !isLoggedIn && <UserAccessForm /> }
        <div id="meetup-info">
          <h1> Meetup </h1>
          <p> When: {`${date}  ${time}`} </p>
          <p> Start Address: {start_location} </p>
          <p> End Address: {end_location} </p>
        </div>
        <div id='map'>
         <h1> Google Map </h1>
        </div>
        <ul id='attendees'>
          {attendees}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { ...reduxState }
}

export default connect(mapStateToProps, { getMeetupInfo })(Home)


Home.defaultProps = {
  isLoggedIn: false   //temporary solution. Pending server confirmation.
}
