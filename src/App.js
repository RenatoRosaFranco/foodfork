import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// COMPONENTS
import Form from './components/Form';
import Recipes from './components/Recipes';

// API KEY
const API_KEY = '5b4c51c5151b1424e11363e564506498';

class App extends Component {
	state = {
		recipes: []
	}

	getRecipe = async (e) => {
	 	const recipeName = e.target.elements.recipeName.value;
	 	e.preventDefault();
	 	const  api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
		const  data = await api_call.json();
		this.setState({recipes: data.recipes });
		console.log(data);
	}
	
	render() {
		return (
	  	<div className="App">
	    	<header className="App-header">
	      	<h1 className="App-title">Recipe Search</h1>
	    	</header>
	    	<Form getRecipe={this.getRecipe}/>
	    	<Recipes recipes={this.state.recipes}/>   	
	  	</div>
		);
	}
}

export default App;
