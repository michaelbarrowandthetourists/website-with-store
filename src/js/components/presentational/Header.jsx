import React from "react";
import EmailCapture from "../presentational/EmailCapture.jsx";
import PropTypes from 'prop-types';

const Header = () => (
  <header className="header">
    <h1>Michael Barrow <span class="ampersand">&</span> The Tourists</h1>
    <nav>
    	<a>TOUR</a>
    	<a>MERCH</a>
    </nav>
    <EmailCapture />
  </header>
);

export default Header;
