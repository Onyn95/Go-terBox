import React from "react";
import { Link } from "react-router-dom";

import AuthUserContext from "./AuthUserContext";
import SignOutButton from './SignOut';
import * as routes from "../constants/routes";

import logo from "../img/logo.png";

const Navigation = () => 
    <AuthUserContext.Consumer>
        {
            authUser => authUser ?
                <div className="navigation-menu">
                    <NavigationAuth />
                </div> :
                <div className="navigation-menu">
                    <NavigationNonAuth />
                </div>
        }
    </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <ul>
        <li className="liSign signout"><SignOutButton /></li>
        <li className="liMenu landing"><Link to={routes.LANDING}><img src={logo} id="header_logo" alt="Mon goûter logo" width="80" height="50"/></Link></li>
        <li className="liMenu home"><Link to={routes.HOME}>Créer son goûter</Link></li>
        <li className="liSign account"><Link to={routes.ACCOUNT}>Mon compte</Link></li>
    </ul>

const NavigationNonAuth = () =>
    <ul>
        <li className="liMenu landing"><Link to={routes.LANDING}><img src={logo} id="header_logo" alt="Mon goûter logo" width="80" height="50"/></Link></li>
        <li className="liSign sign_up"><Link to={routes.SIGN_UP}>S'enregistrer</Link></li>
        <li className="liSign sign_in"><Link to={routes.SIGN_IN}>Se connecter</Link></li>
    </ul>

export default Navigation;