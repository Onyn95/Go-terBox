import React from 'react';
import { Link } from "react-router-dom";

import { auth } from "../firebase";

const PasswordForgetPage = () =>
  <div className="container">
    <h1>Mot de passe oublié</h1>
    <PasswordForgetForm />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
    
    event.preventDefault();
  }
  
  render() {
    const {
      email,
      error
    } = this.state;

    const isInvalid = email === "";

    return (
      <form onSubmit={this.onSubmit} className="blackMask">
        <input
          value={this.state.email}
          onChange={event => this.setState(byPropKey("email", event.target.value))}
          type="text"
          className="form-control"
          placeholder="Email"
          required
        />
        <button className="btn btn-primary btn-lg formSign" disabled={isInvalid} type="submit">
          Reinitialiser mon mot de passe
        </button>

        { error && <p>{error.message}</p> }
      </form>
    )
  }
}

const PasswordForgetLink = () => 
  <p>
    <Link to="/pw-forget">Mot de passe oublié ?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink
}