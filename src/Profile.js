import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from './actions/userActions';
import ProfileInfo from './ProfileInfo';
import ProfileForm from './ProfileForm';
import './Profile.css'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confrimPassword: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    console.log(e.target.name)


    if(e.target.name === 'isEdit') {
      this.setState({
        [e.target.name]: !this.state[e.target.name]
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.name)
  }

  handleChange(e) {

    console.log(e.target.value, e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    this.props.getUserInfo();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.users.username,
      firstName: nextProps.users.firstName,
      lastName: nextProps.users.lastName,
      email: nextProps.users.email
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} name='isEdit' > Edit </button>
        {
          this.state.isEdit
            ? <ProfileForm {...this.state} handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)} />
            : <ProfileInfo {...this.props.users} />
        }
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState
  }
}

export default connect(mapStateToProps, {getUserInfo})(Profile)
