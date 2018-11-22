import React from 'react';

import { auth } from "../firebase";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      }
    );

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    
    return (
      <form onSubmit={this.onSubmit} className="blackMask">
        <h1>Changer de mot de passe</h1>
        <input
          value={passwordTwo}
          className="form-control"
          onChange={event => this.setState(byPropKey("passwordOne", event.target.value))}
          type="password"
          placeholder="Confirmez le nouveau mot de passe"
          required
        />
        <button  className="btn btn-primary btn-lg formSign" disabled={isInvalid} type="submit">
          Reinitialiser mon mot de passe
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default PasswordChangeForm;