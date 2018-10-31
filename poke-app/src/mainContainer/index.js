import React, { Component } from 'react';
import PokeList from '../pokelist';

class MainContainer extends Component {
	constructor(){
		super();

		this.state = {
			pokedex: []
		}
	}
	populateDex = async () => {
	    
	    try {
	      const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/');
	      const allPokes = await pokemon.json();
	      return allPokes
	    } catch(err){
	      return(err)
	    }
    	
 	}
 	componentDidMount(){
	    this.populateDex().then((data) => {
	      console.log(data, '<---- gotta catch em allllllll');
	      this.setState({
	        pokedex: data
	      });
	    });
 	}
	render(){
		return(
			<PokeList pokemon={this.pokedex} />
		)
	}
}
export default MainContainer;
