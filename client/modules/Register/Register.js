import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from './RegisterActions';
import { toast } from 'react-toastify';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      email: '',
      password: '',
    };
  }
  componentDidMount() {

  }
  register = () => {
    const user = {
      name: this.state.name,
      company: this.state.company,
      email: this.state.email,
      password: this.state.password,
    };
    if (user.name === '' || user.email === '' || user.password === '' || user.company === '') {
      toast.error('All fields are required');
    } else {
      this.props.dispatch(register(user));
      toast.success('Register Successful');
    }
  }
  handleChange = (evt) => {
    const user = {
      name: this.state.name,
      company: this.state.company,
      email: this.state.email,
      password: this.state.password,
    };
    switch (evt.target.id) {
      case 'name':
        user.name = evt.target.value;
        break;
      case 'email':
        user.email = evt.target.value;
        break;
      case 'password':
        user.password = evt.target.value;
        break;
      case 'company':
        user.company = evt.target.value;
        break;
      default:
        break;
    }
    this.setState(user);
  }
  reset = () => {
    this.setState({
      name: '',
      company: '',
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <div>
        <center><h2>Register</h2></center>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name</label>
          <input onChange={this.handleChange} type="email" className="form-control" id="name" placeholder="name@example.com" value={this.state.name} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Company</label>
          <input onChange={this.handleChange} type="email" className="form-control" id="company" placeholder="name@example.com" value={this.state.company} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input onChange={this.handleChange} type="email" className="form-control" id="email" placeholder="name@example.com" value={this.state.email} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Password</label>
          <input onChange={this.handleChange} type="password" className="form-control" id="password" value={this.state.password} />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.register}>Register</button>
          <button className="btn btn-default" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}


Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Register.contextTypes = {
  router: PropTypes.object,
};

export default connect()(Register);
