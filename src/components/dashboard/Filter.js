import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="filter section container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Upcoming movies</h5>
          <div className="input-field">
            <label htmlFor="movie">Find your movie by name</label>
            <input type="email" id="movie" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn grey darken-2 z-depth-0">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
