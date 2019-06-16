import React, {Component} from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import EmailCapture from "../presentational/EmailCapture.jsx";

class Header extends Component {
	constructor () {
		super();
	}

	render() {
		return (
		  <header className="header container">
		    <Link to="/">
		    	<img className="u-full-width" src={require('../../../images/widelogo.png')}/>
		    </Link>
		    <nav>
		    	<Link  to="/tour">TOUR</Link>
		    	<a href="https://michael-barrow-and-the-tourists.square.site/">MERCH</a>
		    </nav>
		    <EmailCapture />
		  </header>
		);
	}
}

export default Header;