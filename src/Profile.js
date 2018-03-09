import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "./actions/userActions";
import ProfileInfo from "./ProfileInfo";
import ProfileForm from "./ProfileForm";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confrimPassword: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    if (e.target.name === "isEdit") {
      this.setState({
        [e.target.name]: !this.state[e.target.name]
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.name);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentDidMount() {
    let { username, firstName, lastName, email } = this.props.user;

    this.setState({
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} name="isEdit">
          Edit
        </button>
        {this.state.isEdit ? (
          <ProfileForm
            {...this.state}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        ) : (
          <ProfileInfo {...this.props.user} />
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.users
  };
}

export default connect(mapStateToProps, { login })(Profile);
