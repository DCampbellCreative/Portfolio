import React from 'react';
import './CaseStudy4.css';

export const CaseStudy4 = () => {

	return (
		<div className="cs-container">
			<div className="cs-card">
				<div className="cs-card-container">

					<div className="cs-container-1">
						<h1 className="cs-heading cs-heading-1">FlixFix</h1>

						<div className='cs-body'>
							<p>
								FlixFix is the client side of application allowing users to interact with server side code created and tested using Express, Node.js, Postman, and MongoDB. The backend performs CRUD interactions with a MongoDB database. It allows user to view details about movie objects stored in the database, add these objects to a list of their favorite movies, register for accounts, update their existing account information, and delete their accounts. The goal of this app was to familiarize myself with the JavaScript framework Angular and its preferred flavor of JavaScript, TypeScript.
							</p>
						</div>
						{/* <img className="cs2-image" src={require('../../assets/casestudy2-1.png')} alt="dontbudge" /> */}
					</div>

					<div className='cs-border'></div>

					<div className="cs-container-2">
						<h1 className="cs-heading">Process and Challenges</h1>
						<div className='cs-body'>
							<p>I began by initializing my project using Angular CLI. Once the boilerplate application was created, I was overwhelmed by the shear amount of files created.  Going step by step following my CareerFoundry curriculum, this task became less daunting. This was also my first exposure to TypeScript, similarly, I greatly over thought the concept at first but soon realized it was just JavaScript with self imposed training wheels.</p>
							<p>I housed the API call functions in their own TypeScript file. I created a list of movie cards rendered from the database as the main page, once a user was authenticated. Passing data between components using interpolation and data binding takes a few more steps than passing props in React. Even though the extra steps are complicated, two way data binding is very helpful. I loaded all the data for the movies into the movie card component, then passed it to the other components to be displayed in dialogs when the corresponding button was clicked.</p>
							<p>One of my biggest challenges while approaching this project was learning directives. Adding and removing the movies from the user's favorites using JavaScript was fairly straight forward. I then added a variable to check whether or not the movie was already included in the array. I used the *ngClass directive to change the material UI components on the cards when users added or removed a movie from their favorites. This allowed the user's to see on screen feedback representing the movies in the favorite array. I used the material UI snack bar component to give further feedback to the user, in the case of successful requests or errors. Once all the functionality was implemented I extensively commented my code and used TypeDoc to generate documentation.</p>
							<p>I appreciate how Angular has so many built in modules and a built in router. Using the Angular Material UI quickly allowed me to create elements I thought would take me ages at first. Angular Material also allows for a consistent user experience out of the box.</p>
						</div>
					</div>

					<div className='cs-border'></div>

					<div className="cs-container-3">
						<h1 className="cs-heading">Results</h1>
						<div className='cs-body cs-body-end'>
							<p>
								This project took three weeks to complete, about half the time it took me to create a similar app in React just a few months back. This definitely speaks to my progression as a programmer. Problems that, at first, seemed extremely complex began to seem simpler when broken down. Focusing on functions in one Angular file at a time instead of trying immediately to have it working across all the files in and outside of the component was very helpful.
							</p>
						</div>
						<div className='cs-flex-container'>
							<div className='cs-flex-2'>
								<h3 className='cs-credits'>Credits</h3>
								<h3 className='cs-credits'>Role: Lead Developer</h3>
								<h3 className='cs-credits'>Tutor: Adam Pagels</h3>
								<h3 className='cs-credits cs-credits-end'>Mentor: Gerrit Uit den Boogaart</h3>
							</div>
							<button className='cs-button'>Close</button>
						</div>

					</div>

				</div>
			</div >
		</div >
	)
} 