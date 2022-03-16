import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import './CaseStudy2.css';


export const CaseStudy2 = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div className="cs-container">
			<div className="cs-card" >
				<div className="cs-card-container">

					<Link className='x-button' to='/' >X</Link>

					<h1 className="cs-heading">Don't Budge</h1>
					<div>
						<div className='image-container'>
							<img className="cs2-image" src={require('../../assets/casestudy2-3.png')} alt="demo-budget-app" />
							<p className='cs-caption'>Original App from FreeCodeCamp.org</p>
						</div>
						<div className='cs-body cs-body-end'>
							Don't Budge is a lightweight budgeting app created using JavaScript, HTML, and CSS.
							It allows users to enter their budget and expenses, and calculate a remaining balance based upon these inputs.
							My goal was to further my understanding of the fundamentals of JavaScript and learn how to display and edit lists dynamically.
							After working primarily in the JavaScript library React for an extended period of time,
							I challenged myself to build an app from scratch using vanilla JavaScript, based solely upon an image and short demo of
							a project created by another developer.
						</div>
					</div>

					<div className='cs-border'></div>

					<h1 className="cs-heading">Process and Challenges</h1>
					<p className='cs-body'>
						I began by creating HTML input fields with submit buttons to add user inputs as values.
						The submit button on the budget field directly sets and displays the budget value.
						Submitting the expense field originally created a simple array holding the expense values and reduced them into
						a single number reflecting the total amount of these values. I then created a function to subtract the total value
						of the expenses from the supplied budget value and display this in the balance field.
						I realized displayed expenses would be more practical if they had descriptions to accompany them.
						To achieve this I would need to refactor my code and take a different approach.
						I had to convert each expense to an object to hold key and value pairs, and then push those objects to an array. Using document object model, or DOM, manipulation,
						I displayed the expense amounts and descriptions with the values held in the created objects.
					</p>

					<div className='image-container-center' >
						<img className="cs1-image-2 cs2-image-center" src={require('../../assets/casestudy2-2.png')} alt="add-list-item-function" />
						<p className='cs-caption'>Function to add/delete list items</p>
					</div>

					<p className="cs-body cs-body-end">
						This brought me to my biggest challenge, creating a button with a function that would remove the desired element from the
						DOM and the corresponding object from the array simultaneously.
						With guidance from my CareerFoundry mentor, I came up with a solution that searched the created array
						for parameters exactly matching the object amounts and descriptions provided by users. Once the item is
						removed, the object amounts are reduced once again to update the user's expense value,
						then this new value is subtracted from the budget value to display a new user balance.
					</p>

					<div className='cs-border'></div>

					<div>
						<div className='video-container'>
							<img className="cs-video" src={require('../../assets/dontbudge.gif')} alt="dont-budge-video" />
							<p className='cs-caption'>Final JavaScript Application</p>
						</div>
						<div>
							<h1 className="cs-heading">Results</h1>
							<p className='cs-body cs-body-end'>
								The final product took around two weeks to complete.
								The resulting app allows users to set a budget, create and edit a list of expenses dynamically and view their
								remaining balance based upon these inputs. All forms are validated to accept the correct values.
								I learned a lot about the importance of indices in an array, targeting elements in the DOM, parsing user inputs for integers,
								validating fields with conditionals, the CSS grid, and reducing arrays. When approaching
								a project similar to this in the future, I will be sure to work with objects off the bat so dynamically generated information can
								be more descriptive and user friendly.
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
			</div>
		</div>

	)
} 