import React, { Component } from 'react';


const PokeList = (props) => {
	const pokemonList = props.pokemon.map((pokemon, i) => {
		return(
			<li key={i}>
				{pokemon.name}
			</li>
		)
	});
		return(
			<div>
				<h2>Every Pokemon Ever:</h2>
				<ul>
					{pokemonList}
				</ul>
			</div>
		)
}

export default PokeList;
