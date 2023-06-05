import React from 'react';
import './googleButton.css';

const GoogleButton = () => {
  return (
    <button className="google-button inline-flex align-center justify-center p-[0.5rem 1rem] rounded-[0.25rem]">
      <span className="google-icon"></span>
      Sign in with Google
    </button>
  );
};

export default GoogleButton;
