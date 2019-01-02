import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "../presentational/Header.jsx";
import Carousel from "../presentational/Carousel.jsx";
import Footer from "../presentational/Footer.jsx";

class App extends Component {
	constructor() {
		super();
	}
	render() {
	    return (
	     <div>
	     	<Header />
	     	<Carousel />
	     	<Footer />
	     </div>
	    );
  	}
}
export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;