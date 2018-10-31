import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';



class FavPokes extends Component {
	render(){
		console.log(this.props.pokemon, '<--------------new fav');
		const pokemonList = this.props.pokemon.map((poke, i) => {
			return(
				<li key={i}>
					{poke.name}
				</li>
			)	
		});
		return(
			<div>
				<h2>Your Favorite Pokemon:</h2>
				<ul>
					{pokemonList}
				</ul>
			</div>
		)
	}
}
export default FavPokes;
