import React from 'react';
import './MyWork.css';


export const MyWork = () => {

	return (
		<div className="my-work-container">
			<div className="project-list">

				<div className="project-card">
					<div className='card-container'>
						<div className="column-1">
							<div className="column-1-container">
								<div className="card-heading">ReactDex</div>
								<p className="card-body">
									A Pokédex created using create-react-app, lodash, pokeapi.co, and React.
									Loads and displays a list of Pokémon from pokeapi.co and displays their names and sprites.
									The list is searchable by name, and sortable by number or name ascending and descending.
									Clicking on a list item loads a modal showing front and back sprites, height, and types of desired Pokémon.
								</p>
								<p className="project-tools">#HTML, #CSS, #REACT, #LODASH</p>
								<div className="button-container">
									<a className="card-button" href="https://dcampbellcreative.github.io/react-pokedex/" rel="noreferrer" target="_blank">Deployment</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/react-pokedex" rel="noreferrer" target="_blank">Source Code</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/react-pokedex" rel="noreferrer" target="_blank">More Info</a>
								</div>
							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/reactdex.png')} alt="reactdex" />

						</div>
					</div>
				</div>


				<div className="project-card">
					<div className='card-container'>
						<div className="column-1">
							<div className="column-1-container">
								<div className="card-heading">Don't Budge</div>
								<p className="card-body">
									A lightweight budgeting app created using vanilla JavaScript, HTML, and CSS.
									Allows users to enter their budget and expenses and calculate their budget balance based upon these inputs.
									Forms are validated  values can be submitted.
									Expenses are displayed on screen and can easily be removed from display and calculation by clicking the "delete" button.
								</p>
								<p className="project-tools">#HTML, #CSS, #JAVASCRIPT</p>
								<div className="button-container">
									<a className="card-button" href="https://dcampbellcreative.github.io/dont_budge/" rel="noreferrer" target="_blank">Deployment</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/dont_budge" rel="noreferrer" target="_blank">Source Code</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/react-pokedex" rel="noreferrer" target="_blank">More Info</a>
								</div>
							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/dontbudge.png')} alt="reactdex" />
						</div>
					</div>
				</div>

				<div className="project-card">
					<div className='card-container'>
						<div className="column-1">
							<div className="column-1-container">
								<div className="card-heading">Meet</div>
								<p className="card-body">
									A lightweight budgeting app created using vanilla JavaScript, HTML, and CSS.
									Allows users to enter their budget and expenses and calculate their budget balance based upon these inputs.
									Forms are validated  values can be submitted.
									Expenses are displayed on screen and can easily be removed from display and calculation by clicking the "delete" button.
								</p>
								<p className="project-tools">#HTML, #CSS, #JAVASCRIPT</p>
								<div className="button-container">
									<a className="card-button" href="https://dcampbellcreative.github.io/dont_budge/" rel="noreferrer" target="_blank">Deployment</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/dont_budge" rel="noreferrer" target="_blank">Source Code</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/react-pokedex" rel="noreferrer" target="_blank">More Info</a>
								</div>
							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/dontbudge.png')} alt="reactdex" />
						</div>
					</div>
				</div>

				<div className="project-card">
					<div className='card-container'>
						<div className="column-1">
							<h1 className="card-heading">ReactDex</h1>
							<p className="card-body">
								A Pokédex created using create-react-app, lodash, pokeapi.co, and React.
								Loads and displays a list of Pokémon from pokeapi.co and displays their names and sprites.
								The list is searchable by name, and sortable by number or name ascending and descending.
								Clicking on a list item loads a modal showing front and back sprites, height, and types of desired Pokémon.</p>
							<div className="button-container">
								<a className="card-button" href="https://dcampbellcreative.github.io/dont_budge/">View Deployment</a>
								<a className="card-button" href="https://github.com/DCampbellCreative/dont_budge">View Source Code</a>
							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/reactdex.png')} alt="reactdex" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

