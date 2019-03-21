import React, { Component } from 'react';
import { dates } from './data.js';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dates: dates
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