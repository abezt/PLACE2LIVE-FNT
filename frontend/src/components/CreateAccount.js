import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react/cjs/react.production.min';
import './ca_styles.css';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          email: '',
          psw: ''};
  
      this.handleChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.routeChange = this.routeChange.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
          });
    }

    handleSubmit(event) {
      alert('Email: ' + this.state.email + "\nPassword: " + this.state.psw);
      event.preventDefault();
    }

    routeChange= () => {
      let navigate = useNavigate();
      let path = '/map';
      useEffect(() => {
        navigate("/")
      });

    }
  
    render() {
      return (
        <section>
            <div class="modal">
                <form class="modal-content" action="/action_page.php" onSubmit={this.handleSubmit}>
                    <div class="container">
                        <h1><b>Sign Up</b></h1>
                        <p>Please fill in this form to create an account</p>
                        <hr />
                        <label for="email"><b>Email</b></label>
                        <input type="text" value={this.state.email} placeholder="Enter Email" name="email" onChange={this.handleChange} required/>
                        <label for="psw"><b>Password</b></label> 
                        <input type="password" value={this.state.psw} placeholder="Enter Password" name="psw"  onChange={this.handleChange} required/>
                        <label for="psw-rep"><b>Repeat Password</b></label> 
                        <input type="password" value={this.state.value} placeholder="Repeat Password" name="psw-rep"  onChange={this.handleChange} required/>
                        <p>By creating an account you agree to our Terms and Service</p>
                        
                        <div class="clearfix">
                            <button type="button" onClick={this.routeChange} class="cancelbtn">Cancel</button>
                            <button type="submit" class="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
      );
    }
  }
export default NameForm;