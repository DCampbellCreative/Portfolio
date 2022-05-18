import React from 'react';
import './MyWork.css';
import { Link } from "react-router-dom";


export const MyWork = () => {
	return (
		<section className="my-work-container" id='projects'>
			<main className="project-list">

				<article className="project-card tall">
					<div className='card-container'>
						<div className="column-1">
							<div className="column-1-container">
								<div className="card-heading">FlixFix</div>
								<p className="card-body">
									Full Stack application created from scratch.
									Server side REST API created using NodeJS and Express.
									Database created using MongoDB.
									Two separate Client side applications. React application with UI created using React Bootstrap.
									Angular application created using TypeScript and MaterialUI.
									Users can register new accounts, login using existing accounts, and update and delete their current account.
									Renders a list of movies stored in database.
									Users can view detailed information about each title and add and remove titles from their favorites.
								</p>
								<p className="project-tools">#REACT, #REACTBOOTSTRAP, #ANGULAR, #MATERIALUI, #TYPESCRIPT, #MONGODB, #NODEJS, #EXPRESS</p>

								<div className="button-container mb-10">
									<a className="card-button" href="https://main--movieapiclient.netlify.app/" rel="noreferrer" target="_blank">React App</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/movie_api-client" rel="noreferrer" target="_blank">React Code</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/movie_api" rel="noreferrer" target="_blank">Server Side</a>
								</div>

								<div className="button-container">
									<a className="card-button" href="https://dcampbellcreative.github.io/myFlix-Angular-client/welcome" rel="noreferrer" target="_blank">Angular App</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/myFlix-Angular-client" rel="noreferrer" target="_blank">Angular Code</a>
									<Link className="card-button" to='/flixfix'>Process</Link>
								</div>

							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/flixfixreact.png')} alt="flixfix" />
						</div>
					</div>
				</article>

				<article className="project-card">
					<div className='card-container'>
						<div className="column-1">
							<div className="column-1-container">
								<div className="card-heading">ReactDex</div>
								<p className="card-body">
									A Pokédex created using create-react-app, lodash, pokeapi.co, and React.
									Loads and displays a list of Pokémon from pokeapi.co and displays their names and sprites.
									The list is searchable by name and sortable by ID number or name ascending and descending.
									Clicking on a list item loads a modal showing front and back sprites, height, and types of selected Pokémon.
									Changes background based upon Pokémon's type.
								</p>
								<p className="project-tools">#HTML, #CSS, #REACT, #LODASH</p>
								<div className="button-container">
									<a className="card-button" href="https://dcampbellcreative.github.io/react-pokedex/" rel="noreferrer" target="_blank">App</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/react-pokedex" rel="noreferrer" target="_blank">Source Code</a>
									<Link className="card-button" to='/reactdex'>Process</Link>
								</div>
							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/reactdex-3.png')} alt="reactdex" />

						</div>
					</div>
				</article>


				<article className="project-card">
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
									<a className="card-button" href="https://dcampbellcreative.github.io/dont_budge/" rel="noreferrer" target="_blank">App</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/dont_budge" rel="noreferrer" target="_blank">Source Code</a>
									<Link className="card-button" to='/dontbudge'>Process</Link>
								</div>
							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/dontbudge2.png')} alt="reactdex" />
						</div>
					</div>
				</article>


				<article className="project-card tall">
					<div className='card-container'>
						<div className="column-1">
							<div className="column-1-container">
								<div className="card-heading">Coming Soon! Sitcom Sites</div>
								<p className="card-body">
									A full stack application with a backend created in MongoDB, NodeJS, and Express. Front end created using React and TailwindCSS.
									I'm turning my love for 90's sitcoms into an app. Let users view facts and trivia about places used in sitcoms. Shows sets supposed real world location on map.
									Check out my progress so far and stay tuned for the finished project!
								</p>
								<p className="project-tools">#REACT, TAILWINDCSS, #RESTAPI, #MONGODB</p>
								<div className="button-container">
									<a className="card-button" href="https://github.com/DCampbellCreative/Sitcom-Sites" rel="noreferrer" target="_blank">Source Code</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/Sitcom-Sites_Backend" rel="noreferrer" target="_blank">Server Side</a>
									<Link className="card-button hidden" to='/dontbudge'>Process</Link>
								</div>
							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/sitcomsites.png')} alt="reactdex" />
						</div>
					</div>
				</article>


				{/* <article className="project-card">
					<div className='card-container'>
						<div className="column-1">
							<div className="column-1-container">
								<div className="card-heading">FlixFix React</div>
								<p className="card-body">
									Client side application created using React. Interacts with server side REST API and MongoDB database.
									UI developed using React-Bootstrap.
									Users can register new accounts, login using existing accounts, and update and delete their current account.
									Renders a list of movies stored in a MongoDB database.
									Users can view detailed information about each title and add and remove titles from their favorites.
									Process explanation coming soon!
								</p>
								<p className="project-tools"> #MONGODB, #NODEJS, #EXPRESS</p>
								<div className="button-container">
									<a className="card-button" href="https://main--movieapiclient.netlify.app/" rel="noreferrer" target="_blank">Website</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/movie_api-client" rel="noreferrer" target="_blank">Source Code</a>
									<Link className="card-button hidden" to='/flixfix'>Process</Link>
								</div>
							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/flixfixreact.png')} alt="flixfix" />
						</div>
					</div>
				</article> */}

				{/* <article className="project-card">
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
									<a className="card-button" href="https://dcampbellcreative.github.io/meet//" rel="noreferrer" target="_blank">Website</a>
									<a className="card-button" href="https://github.com/DCampbellCreative/meet" rel="noreferrer" target="_blank">Source Code</a>
									<a className="card-button hidden">More Info</a>

								</div>
							</div>
						</div>
						<div className='column-2'>
							<img className="card-image" src={require('../../assets/meet.png')} alt="reactdex" />
						</div>
					</div>
				</article> */}

			</main>
		</section>
	)
};

