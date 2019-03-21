import React, {Component} from "react";
import ReactDOM from "react-dom";

class Footer extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<footer className="footer">
				<span className="footer-icon">
					<i className="fab fa-spotify"></i>
				</span>
				<span className="footer-icon">
					<i className="fab fa-apple"></i>
				</span>
				<span className="footer-icon">
					<i className="fab fa-instagram"></i>
				</span>
				<span className="footer-icon">
					<i className="fab fa-facebook-f"></i>
				</span>
				<span className="footer-icon">
					<i className="fab fa-twitter"></i>
				</span>
				<span className="footer-icon">
					<i className="fab fa-youtube"></i>
				</span>
				<span className="footer-icon">
					<i className="fab fa-bandcamp"></i>
				</span>
			</footer>
		);
	}
}

export default Footer;