import React from 'react';
import './MyWork.css';
import { NavLink } from 'react-router-dom';


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
									The list is searchable by name, and sortable by ID number or name ascending and descending.
									Clicking on a list item loads a modal showing front and back sprites, height, and types of selected Pokémon.
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
									A budgeting app created using vanilla JavaScript, HTML, and CSS.
									Allows users to enter their budget and expenses and calculate a balance based upon these inputs.
									Forms are validated before values can be submitted.
									Expenses are displayed on screen and can be removed from display and calculation by clicking the "delete" button.
								</p>
								<p className="project-tools">#HTML, #CSS, #JAVASCRIPT</p>
								<div className="button-container">
									<a className="card-button" href="https://dcampbellcreative.github.io/dont_budge/" rel="noreferrer" target="_blank">Deployment</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/dont_budge" rel="noreferrer" target="_blank">Source Code</a>
									<NavLink className="card-button" to="/projects/dontbudge">More Info</NavLink>
								</div>
							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/dontbudge2.png')} alt="reactdex" />
						</div>
					</div>
				</div>

				<div className="project-card">
					<div className='card-container'>
						<div className="column-1">
							<div className="column-1-container">
								<div className="card-heading">Meet</div>
								<p className="card-body">
									A PWA created using AWS, React, Recharts, Serverless, Jest, and the Google Calendar API.
									Approached using a test-driven development technique.
									Fetches and displays a list of programming events from the Google Calendar API. Visualizes data using Recharts.
									Users can filter events by city, specify the number of events to display, show/hide event details, and use the app while offline.
								</p>
								<p className="project-tools">#REACT, #GOOGLE, #AWS, #JEST</p>
								<div className="button-container">
									<a className="card-button" href="https://dcampbellcreative.github.io/meet//" rel="noreferrer" target="_blank">Deployment</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/meet" rel="noreferrer" target="_blank">Source Code</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/react-pokedex" rel="noreferrer" target="_blank">More Info</a>
								</div>
							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/meet.png')} alt="reactdex" />
						</div>
					</div>
				</div>

				<div className="project-card">
					<div className='card-container'>
						<div className="column-1">
							<div className="column-1-container">
								<div className="card-heading">FlixFix</div>
								<p className="card-body">
									Client side application created using Angular and TypeScript. Interacts with server side REST API and MongoDB database.
									Users can register new accounts, login using existing accounts, and update and delete their current account.
									Renders a list of movies stored in a MongoDB database.
									Users can view detailed information about each title and add and remove titles from their favorites.
								</p>
								<p className="project-tools">#ANGULAR, #MONGODB, #TYPESCRIPT, #NODE.JS, #EXPRESS</p>
								<div className="button-container">
									<a className="card-button" href="https://dcampbellcreative.github.io/myFlix-Angular-client/movies" rel="noreferrer" target="_blank">Deployment</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/myFlix-Angular-client" rel="noreferrer" target="_blank">Source Code</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/react-pokedex" rel="noreferrer" target="_blank">More Info</a>
								</div>
							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/flixfix.png')} alt="reactdex" />
						</div>
					</div>
				</div>


			</div>
		</div>
	)
};

