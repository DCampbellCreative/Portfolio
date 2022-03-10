import React from 'react';
import './CaseStudy1.css';


export const CaseStudy1 = (props) => {
	if (!props.showCs1) {
		return null
	}
	return (
		<div className="cs-container" onClick={props.onClose}>
			<div className="cs-card" onClick={e => e.stopPropagation()}>
				<div className="cs-card-container">


					<h1 className="cs-heading">ReactDex</h1>
					<div className='cs-flex-container'>
						<p className='cs-body cs-body-img'>
							ReactDex is a single page application, or SPA, created using the Javascript library React, HTML, CSS, the NPM package Lodash,
							and the pokeapi.co API. It displays a list of Pokémon loaded from an external application programming interface, or API.
							The list is sortable and searchable. Users can click on list items to display a modal containing detailed data about the
							selected Pokémon. The application was originally created as a vanilla JavaScript application as part of my CareerFoundry
							curriculum, I challenged myself to recreate it in React to implement new features and learn more about the library.
							The current incarnation has many more features than the original.
						</p>
						<div className='image-container'>
							<img className="cs-image" src={require('../../assets/casestudy1-1.png')} alt="jspokedex" />
							<p className='cs-caption'>Original app</p>
						</div>
					</div>

					<div className='cs-border'></div>


					<h1 className="cs-heading">Process and Challenges</h1>
					<p className='cs-body cs-body-end'>
						The app was initialized using Create-React-App.
						I populated the directory with components and created a separate file for my API calls.
						One function retrieved the list of Pokemon from pokeapi.co and another was created to
						retrieve details from specific endpoints containing more detailed information for each creature.
					</p>
					<p className='cs-body'>
						A map function renders the data as buttons in an unordered list.
						I created a function on click that would set the state variable, setShow, as true.
						This reveals a modal, housed in a different component, displaying detailed information about each Pokémon object.
						I had to split the fetch URL to retrieve each
						Pokémon's ID and set it as variable separately from the item's index.
						Plugging this into a URL allowed me to find the address for the item's sprite and display it on the main page.
						I originally used the indices as keys for the list items but this caused a conflict once
						I implemented the search feature since the indices changed. It would filter the name's of the
						Pokemon but it would display the images of the object that originally held that index. To sort the items
						I used Lodash, which I learned is much easier than creating a JavaScript sort function from scratch.
					</p>
					<div className='image-container-center'>
						<img className="cs1-image-2" src={require('../../assets/casestudy1-2.png')} alt="pokedexmapfunction" />
						<p lassName='cs-caption'>Function to map items and variable to find sprite URL</p>
					</div>
					<p className='cs-body cs-body-end'>
						This was the first application I created exclusively using functional components and React hooks.
						It was an adjustment from mainly working with class components but I now understand why its the preferred
						structure of modern React applications, the code is much more streamlined.
					</p>

					<div className='cs-border'></div>

					{/* <h1 className="cs-heading">Results</h1>
					<p className='cs-body cs-body-end'>

						This project took around 2 weeks to complete. After creating a React app from scratch I felt much confident
						working with the library. When creating a project like this in the future I will never again set a dynamically rendered list's keys as
						indices. I now understand why React throws that seemly unimportant error message when this is attempted. I always use Create-React-App
						to quickly create a boilerplate application and am able to implement a CSS grid much more quickly.

					</p> */}


					<div className='cs-flex-container'>
						<div className='image-container'>
							<img className="cs-video" src={require('../../assets/reactdex.gif')} alt="reactdex-video" />
							<p className='cs-caption'>Reactdex</p>
						</div>
						<div>
							<h1 className="cs-heading">Results</h1>
							<p className='cs-body cs-body-img cs-body-mr'>
								This project took around 2 weeks to complete. After creating a React app from scratch I felt much confident
								working with the library. When creating a project like this in the future I will never again set a dynamically rendered list's keys as
								indices. I now understand why React throws that seemly unimportant error message when this is attempted. I always use Create-React-App
								to quickly create a boilerplate application and am able to implement a CSS grid much more quickly.
							</p>
						</div>
					</div>


					<div className='cs-flex-container'>
						<div className='cs-flex-2'>
							<h3 className='cs-credits'>Credits</h3>
							<h3 className='cs-credits'>Role: Lead Developer</h3>
							<h3 className='cs-credits cs-credits-end'>Mentor: Gerrit Uit den Boogaart</h3>
						</div>
						<button className='cs-button' onClick={props.onClose}>Close</button>
					</div>

				</div>
			</div >
		</div >
	)
} 