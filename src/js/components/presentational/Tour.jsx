import React from 'react';
import { ProductConsumer } from '../container/context.jsx';

const dateDisplayOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
}

const Tour = () => (
	<div className='container'>
		<table className="u-full-width">
			{<thead>
			</thead>}
			<tbody>
				<ProductConsumer>
				  	{
				  		(value) => {
				  			const { shows } = value;
							  const filteredShows = shows.filter( show => show.display)
				  			return filteredShows.map(show => {
				  				return (
				  					<tr className={show.past && 'pastShow'} >
				  						<td>{show.date.toLocaleDateString('en-US', dateDisplayOptions)}</td>
				  						<td>{show.city}</td>
				  						<td>{show.venue}</td>
										{show.tickets && <td><a href={show.past || show.tickets}>Get Tickets</a></td>}
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