import React from 'react';
import { ProductConsumer } from '../container/context.jsx';

const Tour = () => (
	<div className='container'>
		<table className="u-full-width">
			{<thead>
			</thead>}
			<tbody>
				<ProductConsumer>
				  	{
				  		(value) => {
				  			const { dates } = value;
				  			return dates.map(show => {
				  				return (
				  					<tr>
				  						<td>{show.date}</td>
				  						<td>{show.city}</td>
				  						<td>{show.venue}</td>
				  					</tr>
				  				)
				  			})
				  		}
				  	}
				</ProductConsumer>
			</tbody>
		</table>
	</div>
)

export default Tour;