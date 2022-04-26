import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import './CaseStudy1.css';


export const CaseStudy1 = () => {

	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div className="cs-container" >
			<div className="cs-card">
				<div className="cs-card-container">

					<Link className='x-button' to='/' >X</Link>

					<h1 className="cs-heading">ReactDex</h1>
					<div >
						<div className='cs-column float-right'>
							<div className='image-container'>
								<img className="cs-image" src={require('../../assets/casestudy1-1.png')} alt="javascript-pokedex" />
								<p className='cs-caption'>Application v1.0</p>
							</div>
							<div className='image-container'>
								<img className="cs-image" src={require('../../assets/reactdex-2.png')} alt="javascript-pokedex" />
								<p className='cs-caption'>Application v2.0</p>
							</div>
						</div>
						<p className='cs-body cs-body-end'>
							ReactDex is a single page application, or SPA, created using the Javascript library React, HTML5, CSS3, and the NPM package Lodash.
							The application uses external data loaded from the pokeapi.co application programming interface, or API, to gather and display data
							about a selection of characters from Nintendo's Pokémon video game franchise.
							The backgrounds were created using duiker101's Github repo pokemon-type-svg-icons. The list is sortable and searchable.
							Users can click on list items to display a modal containing detailed data about the selected Pokémon. When a Pokémon is selected the
							background of the application changes dynamically based up the creature's type.
						</p>

						<p className='cs-body cs-body-end'>
							This application is currently in its third version. It was originally created in vanilla JavaScript as part
							of my CareerFoundry curriculum. I challenged myself to recreate it in React to implement many new features
							and learn more about the library. Once I recreated it in React, the app was functional but I realized the user
							interface was lacking and not responsive for smaller screens. I felt that it could use more visual variety.
							I wanted to capture the early 2000's Nintendo feel that made me fall in love with the video game series as a child.
							To achieve this, I created many CSS classes that changed the background based on each
							Pokémon's type and added media rules to make each component fully responsive on a variety of screen sizes.
						</p>

					</div>

					<div className='cs-border'></div>


					<h1 className="cs-heading">Process and Challenges</h1>
					<p className='cs-body cs-body-end'>
						The app was initialized using Create-React-App.
						I populated the directory with components and created a separate file for my API calls. One function,
						called in main component retrieves the list of Pokemon from pokeapi.co. Another retrieves details from specific endpoints
						containing more detailed information about each creature. I call this function in the modal component once a specific Pokémon has been selected.


					</p>
					<p className='cs-body'>
						A map function renders the data as buttons in an unordered list.
						I created an on click function that would set the state variable, show, as true.
						This reveals a modal, housed in a different component, displaying detailed information about each Pokémon object.
						I had to split the fetch URL to retrieve each Pokémon's ID and set it as variable separately from the item's index.
						Plugging this into a URL allowed me to find the address for the item's sprite and display it on the main page.
						I originally used the indices as keys for the list items but this caused a conflict once I implemented the search feature,
						since the indices changed each time the list was rendered. It would filter the name's of the Pokemon but display the images
						of the object that originally held that index.
						To sort the items I used Lodash, which I learned is much easier than creating a JavaScript sort function from scratch.
					</p>
					<div className='image-container-center'>
						<img className="cs1-image-2" src={require('../../assets/casestudy1-2.png')} alt="reactdex-map-function" />
						<p className='cs-caption'>Function to map items and variable to find sprite URL</p>
					</div>
					<p className='cs-body cs-body-end'>
						Inside of the Modal component's useEffect function, I call the function that retrieves specific data about each Pokémon
						and store the name of the background corresponding to the type in the state variable 'background'.
						I pass this variable as a prop to the Background component. I created a list of CSS classes for each type and made
						repeating backgrounds using duiker101's Github repo pokemon-type-svg-icons.
						Using a template literal, I dynamically set the class each time the selected Pokémon's type changes.
					</p>
					<p className='cs-body cs-body-end'>
						This was the first application I created exclusively using functional components and React hooks.
						It was an adjustment from mainly working with class components but I now understand why its the preferred
						structure of modern React applications, the code is much more streamlined. With each version of the app
						I broke down each component into smaller pieces so future editing would be much easier.
					</p>

					<div className='cs-border'></div>

					<div>
						<div className='video-container'>
							<img className="cs-video" src={require('../../assets/reactdex-2.gif')} alt="reactdex-video" />
							<p className='cs-caption'>Final app</p>
						</div>
						<div>
							<h1 className="cs-heading">Results</h1>
							<p className='cs-body cs-body-img cs-body-mr'>
								I've worked on this project on and off over the last few months. After creating a React app from scratch I
								feel much more confident working with the library. When creating a project like this in the future I will
								never again set a dynamically rendered list's keys as indices. I now understand why React throws an error message
								when this is attempted. I am much more confident using built in hooks like useState and useEffect, and passing props
								between components. This project has also taught me a lot about CSS and how it interacts with React and JavaScript.
								I can now easily use template literals to dynamically set classes and can implement a fully responsive CSS grid.
							</p>
						</div>
					</div>


					<div className='cs-flex-container'>
						<div className='cs-flex-2'>
							<h3 className='cs-credits'>
								Credits<br />
								Role: Lead Developer<br />
								Mentor: Gerrit Uit den Boogaart</h3>
						</div>
						<Link className='cs-button' to='/' >Close</Link>
					</div>

				</div>
			</div >
		</div >
	)
} 