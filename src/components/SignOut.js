import React from 'react';
import { auth } from '../firebase';

const SignOutButton = () =>
  <button 
    className="btn btn-dark" 
    type="button"
    onClick={auth.doSignOut}>
    Se deconnecter
  </button>

export default SignOutButton;