import React, { Component } from 'react';
import PokeList from '../pokeList/index';
import FavPokes from '../FavPokes/';

class MainContainer extends Component {
	constructor(){
		super();

		this.state = {
			favPokes: [],
			pokedex: []
		}
	}
	populateDex = async () => {
	    
	    try {
	      const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/');
	      const pokeJson = await pokemon.json();
	      console.log(pokeJson, '<------------------------JSON boiiii'); 
	      return pokeJson
	    } catch(err){
	      return(err)
	    }
    	
 	}
 	favAPoke = (pokemonIndex) => {
 		console.log(pokemonIndex, '<-----------------------index');
 		this.setState({
 			favPokes: [this.state.pokedex[pokemonIndex]],
 		});
 	}
 	componentDidMount(){
	    this.populateDex().then((pokemon) => {
	     	console.log(pokemon.results, '<--------------------- gotta catch em allllllll');

     		this.setState({pokedex: pokemon.results});
			// console.log(this.state.pokedex, '<------------------- dexxxxxter')
	    }).catch((err) => {
	    	console.log(err, '____________error______________');
	    });
 	}
	render(){
		return(
			<div>
				<PokeList pokemon={this.state.pokedex} favAPoke={this.favAPoke} />
				<FavPokes pokemon={this.state.favPokes} />
			</div>
		)
	}
}
export default MainContainer;
