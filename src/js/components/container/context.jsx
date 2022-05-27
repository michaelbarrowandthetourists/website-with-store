import React, { Component } from 'react';
import { shows } from './data.js';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shows: shows
		}
	} 

	render() {
		return (
			<ProductContext.Provider value={{
				...this.state
			}}>
				{this.props.children}
			</ProductContext.Provider>
		)
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };