import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './actions/userActions';

class UserAccessForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLogin: true
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.state.isLogin) {
      let data = {
        email: this.state.email,
        password: this.state.password
      }
      this.props.login(data)
    }

    // e.target.reset();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick(e) {
    this.setState({
      isLogin: e.target.name === 'login'
    })
  }

  render() {
    let formInputs = this.state.isLogin
      ? this.props.inputFields.filter(input => input.loginDisplay )
      : this.props.inputFields;

    formInputs = formInputs.map( ({name, type, label, loginDisplay}) =>
      <label key={name}> {label}
        <input type={name} name={name} onChange={this.handleChange} value={this.state[{name}]} />
      </label>
    )

    return (
      <div className="access-form">
        <button name="login" onClick={this.handleClick}> Login </button>
        <button name="signup" onClick={this.handleClick}> Sign Up </button>
        <form onSubmit={this.handleSubmit}>
          {formInputs}
          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(action) {
  return {
    ...this.state
  }
}


export default connect(mapStateToProps, { login })(UserAccessForm);

UserAccessForm.defaultProps =  {
  inputFields:  [
      {name: 'username', type: 'text', label: 'Username', loginDisplay: false },
      {name: 'firstName', type: 'text', label: 'First name', loginDisplay: false },
      {name: 'lastName', type: 'text', label: 'Last name', loginDisplay: false },
      {name: 'email', type: 'email', label: 'Email', loginDisplay: true },
      {name: 'password', type: 'text', label: 'Password',loginDisplay: true },
      {name: 'confirmPassword', type: 'text', label: 'Confirm Password', loginDisplay: false }
    ]
}
