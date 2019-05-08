import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// COMPONENTS
import Form from './components/Form';
import Recipes from './components/Recipes';

// API KEY
const API_KEY = '5c87ee4dfb6fbe2f3ecda1a7e19ba4f8';

class App extends Component {
	state = {
		recipes: []
	}

	getRecipe = async (e) => {
	 	const recipeName = e.target.elements.recipeName.value;
	 	e.preventDefault();
	 	const  api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
		const  data = await api_call.json();
		this.setState({recipes: data.recipes });
		console.log(data);
	}

	componentDidMount = () => {
		const json = localStorage.getItem('recipes');
		const recipes = JSON.parse(json);
		this.setState({recipes: recipes});
	}

	componentDidUpdate = () => {
	  const recipes = JSON.stringify(this.state.recipes);
		localStorage.setItem('recipes', recipes);
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
