import React, { useState } from 'react';
import './MyWorkMobile.css';
import { CaseStudy1 } from '../CaseStudy1/CaseStudy1';
import { CaseStudy2 } from '../CaseStudy2/CaseStudy2';
import { CaseStudy3 } from '../CaseStudy3/CaseStudy3';
import { CaseStudy4 } from '../CaseStudy4/CaseStudy4';


export const MyWorkMobile = () => {
	const [showCs1, setShowCs1] = useState(false);
	const [showCs2, setShowCs2] = useState(false);
	const [showCs3, setShowCs3] = useState(false);
	const [showCs4, setShowCs4] = useState(false);

	return (
		<section className="my-work-container" id='projects'>
			<main className="project-list">

				<article className="project-card-mobile">
					<div className='card-container-mobile'>

						<div className="card-heading-mobile">ReactDex</div>
						<img className="card-image-mobile" src={require('../../assets/reactdex.png')} alt="reactdex" />
						<p className="card-body-mobile">
							A Pokédex created using create-react-app, lodash, pokeapi.co, and React.
							Loads and displays a list of Pokémon from pokeapi.co and displays their names and sprites.
							The list is searchable by name, and sortable by ID number or name ascending and descending.
							Clicking on a list item loads a modal showing front and back sprites, height, and types of selected Pokémon.
						</p>
						<p className="project-tools-mobile">#HTML, #CSS, #REACT, #LODASH</p>
						<div className="button-container-mobile">
							<a className="card-button-mobile" href="https://dcampbellcreative.github.io/react-pokedex/" rel="noreferrer" target="_blank">Website</a>
							<a className="card-button-mobile" href="https://github.com/DCampbellCreative/react-pokedex" rel="noreferrer" target="_blank">Source Code</a>
							<a className="card-button-mobile" onClick={() => setShowCs1(true)}>More Info</a>
							<CaseStudy1 onClose={() => setShowCs1(false)} showCs1={showCs1} />
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
							<a className="card-button-mobile" onClick={() => setShowCs2(true)}>More Info</a>
							<CaseStudy2 onClose={() => setShowCs2(false)} showCs2={showCs2} />
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
							<a className="card-button-mobile" onClick={() => setShowCs4(true)}>More Info</a>
							<CaseStudy4 onClose={() => setShowCs4(false)} showCs4={showCs4} />
						</div>

					</div>
				</article>

				<article className="project-card-mobile">
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
							<a className="card-button-mobile hidden" onClick={() => setShowCs3(true)}>More Info</a>
							<CaseStudy3 onClose={() => setShowCs3(false)} showCs3={showCs3} />
						</div>

					</div>
				</article>


			</main>
		</section>
	)
};

