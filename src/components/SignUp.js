import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { auth, db } from "../firebase";
import * as routes from "../constants/routes";

const SignUp = ({ history }) =>
  <div className="container">
    <SignUpForm history={history} />
  </div>

const SignUpLink = () =>
  <p>
    Vous n'avez pas de compte ?
    {" "}
    <Link to={routes.SIGN_UP}>S'enregistrer</Link>
  </p>

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: ""
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne
    } = this.state;

    const {
      history
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        //Create user in firebase db
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
        this.setState(() => ({...INITIAL_STATE}));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit} className="blackMask">
        <h1>S'enregistrer</h1>
        <input
          className="form-control"
          value={username}
          onChange={event => this.setState(byPropKey("username", event.target.value))}
          placeholder="Pseudo"
          type="text"
          required
        />
        <input
          className="form-control"
          value={email}
          onChange={event => this.setState(byPropKey("email", event.target.value))}
          placeholder="Email"
          type="text"
          required
        />
        <input
          className="form-control"
          value={passwordOne}
          onChange={event => this.setState(byPropKey("passwordOne", event.target.value))}
          placeholder="Mot de passe"
          type="password"
          required
        />
        <input
          className="form-control"
          value={passwordTwo}
          onChange={event => this.setState(byPropKey("passwordTwo", event.target.value))}
          placeholder="Confirmation du mot de passe"
          type="password"
          required
        />
        <button className="btn btn-primary btn-lg formSign" disabled={isInvalid} type="submit">
          Bienvenue !
        </button>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignUp);

export {
  SignUpForm,
  SignUpLink
}