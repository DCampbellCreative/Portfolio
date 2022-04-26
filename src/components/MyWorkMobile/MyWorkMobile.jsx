import React from 'react';
import './MyWorkMobile.css';
import { Link } from "react-router-dom";



export const MyWorkMobile = () => {
	return (
		<section className="my-work-container" id='projects'>
			<main className="project-list">

				<article className="project-card-mobile">
					<div className='card-container-mobile'>

						<div className="card-heading-mobile">ReactDex</div>
						<img className="card-image-mobile" src={require('../../assets/reactdex-3.png')} alt="reactdex" />
						<p className="card-body-mobile">
							A Pokédex created using create-react-app, lodash, pokeapi.co, and React.
							Loads and displays a list of Pokémon from pokeapi.co and displays their names and sprites.
							The list is searchable by name and sortable by ID number or name ascending and descending.
							Clicking on a list item loads a modal showing front and back sprites, height, and types of selected Pokémon.
							Changes background based upon Pokémon's type.
						</p>
						<p className="project-tools-mobile">#HTML, #CSS, #REACT, #LODASH</p>
						<div className="button-container-mobile">
							<a className="card-button-mobile" href="https://dcampbellcreative.github.io/react-pokedex/" rel="noreferrer" target="_blank">Website</a>
							<a className="card-button-mobile" href="https://github.com/DCampbellCreative/react-pokedex" rel="noreferrer" target="_blank">Source Code</a>
							<Link className="card-button-mobile" to='/reactdex'>Process</Link>
						</div>

					</div>
				</article>

				<article className="project-card-mobile">
					<div className='card-container-mobile'>

						<div className="card-heading-mobile">Don't Budge</div>
						<img className="card-image-mobile" src={require('../../assets/dontbudge2.png')} alt="dontbudge" />
						<p className="card-body-mobile">
							A budgeting app created using vanilla JavaScript, HTML, and CSS.
							Allows users to enter their budget and expenses and calculate a balance based upon these inputs.
							Forms are validated before values can be submitted.
							Expenses are displayed on screen and can be removed from display and calculation by clicking the "delete" button.
						</p>
						<p className="project-tools-mobile">#HTML, #CSS, #JAVASCRIPT</p>
						<div className="button-container-mobile">
							<a className="card-button-mobile" href="https://dcampbellcreative.github.io/dont_budge/" rel="noreferrer" target="_blank">Website</a>
							<a className="card-button-mobile" href="https://dcampbellcreative.github.io/dont_budge/" rel="noreferrer" target="_blank">Source Code</a>
							<Link className="card-button-mobile" to='/dontbudge'>Process</Link>
						</div>

					</div>
				</article>

				<article className="project-card-mobile">
					<div className='card-container-mobile'>

						<div className="card-heading-mobile">FlixFix</div>
						<img className="card-image-mobile" src={require('../../assets/flixfix.png')} alt="flixfix" />
						<p className="card-body-mobile">
							Client side application created using Angular and TypeScript. Interacts with server side REST API and MongoDB database.
							Users can register new accounts, login using existing accounts, and update and delete their current account.
							Renders a list of movies stored in a MongoDB database.
							Users can view detailed information about each title and add and remove titles from their favorites.
						</p>
						<p className="project-tools-mobile">#ANGULAR, #MONGODB, #TYPESCRIPT, #NODEJS, #EXPRESS</p>
						<div className="button-container-mobile">
							<a className="card-button-mobile" href="https://dcampbellcreative.github.io/myFlix-Angular-client/welcome" rel="noreferrer" target="_blank">Website</a>
							<a className="card-button-mobile" href="https://github.com/DCampbellCreative/myFlix-Angular-client" rel="noreferrer" target="_blank">Source Code</a>
							<Link className="card-button-mobile" to='/flixfix'>Process</Link>
						</div>

					</div>
				</article>

				{/* <article className="project-card-mobile">
					<div className='card-container-mobile'>

						<div className="card-heading-mobile">Meet</div>
						<img className="card-image-mobile" src={require('../../assets/meet.png')} alt="flixfix" />
						<p className="card-body-mobile">
							A PWA created using AWS, React, Recharts, Serverless, Jest, and the Google Calendar API.
							Approached using a test-driven development technique.
							Fetches and displays a list of programming events from the Google Calendar API. Visualizes data using Recharts.
							Users can filter events by city, specify the number of events to display, show/hide event details, and use the app while offline.
						</p>
						<p className="project-tools-mobile">#REACT, #GOOGLE, #AWS, #JEST</p>
						<div className="button-container-mobile">
							<a className="card-button-mobile" href="https://dcampbellcreative.github.io/meet//" rel="noreferrer" target="_blank">Website</a>
							<a className="card-button-mobile" href="https://github.com/DCampbellCreative/meet" rel="noreferrer" target="_blank">Source Code</a>
							<a className="card-button-mobile hidden">More Info</a>

						</div>

					</div>
				</article> */}


			</main>
		</section>
	)
};

