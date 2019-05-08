import React, { Component } from 'react';
import './App.css';

// Components
import Form from './components/Form';

const API_KEY = 'b8b4f349ea19d954b275235b87103980';

class App extends Component {
	getRecipe = (e) => {
	 	const recipeName = e.target.elements.recipeName.value;
	 	e.preventDefault();
	 	console.log(recipeName);	
	}
	
	render() {
		return (
	  	<div className="App">
	    	<header className="App-header">
	      	<h1 className="App-title">Recipe Search</h1>
	    	</header>
	    	<Form getRecipe={this.getRecipe}/>
	  	</div>
		);
	}
}

export default App;
