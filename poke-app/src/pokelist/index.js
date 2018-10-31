import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';



class PokeList extends Component {
	handleFav = (e) => {
		this.props.favAPoke(e.currentTarget.id);	
	}
	render(){
		console.log(this.props.pokemon);
		const pokemonList = this.props.pokemon.map((poke, i) => {
			return(
				<li key={i}>
					{poke.name}<Button id={i} color='red' fluid size='small' onClick={this.handleFav}>Fav</Button>
				</li>
			)	
		});

		return(
			<div>
				<h2>Every Pokemon Ever</h2>
				<ul>
					{pokemonList}
				</ul>
			</div>
		)
	}
}
export default PokeList;

