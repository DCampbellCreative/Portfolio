import React from 'react';
import './CaseStudy2.css';

export const CaseStudy2 = (props) => {
	if (!props.showCs2) {
		return null
	}
	return (
		<div className="case-study-2-container" onClick={props.onClose}>
			<div className="cs-card" onClick={e => e.stopPropagation()}>
				<div className="case-study-2-card-container">

					<div className="cs-container-1">
						<div className="cs2-flex-container">
							<div className='cs2-flex-2'>
								<h1 className='cs-heading'>Don't Budge</h1>
								<div className='cs-body cs-body-end'>
									<p >
										Don't Budge is a lightweight budgeting app created using JavaScript, HTML, and CSS.
										It allows users to enter their budget and expenses, and calculate a remaining balance based upon these inputs.
										My goal was to further my understanding of the fundamentals of JavaScript and learn how to display and edit lists dynamically.
										After working primarily in the JavaScript library React for an extended period of time,
										I challenged myself to build an app from scratch using vanilla JavaScript, based solely upon an image and short demo of
										a project created by another developer.
									</p>
								</div>
								<div className='cs-body'></div>
							</div>
							<img className="cs2-image" src={require('../../assets/casestudy2-1.png')} alt="dontbudge" />
						</div>
						<div className='cs-border'></div>
					</div>



					<div className="cs-container-2">
						<h1 className="cs-heading cs2-heading-3">Process and Challenges</h1>
						<div className='cs-body cs-body-end'>
							<p>
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
						</div>

					</div>

					<div className="case-study-2-container-3">
						<div className="cs2-flex-container">

							<img className="cs2-image-2" src={require('../../assets/casestudy2-2.png')} alt="function" />
							<div className='cs-body'>
								<p >
									This brought me to my biggest challenge, creating a button with a function that would remove the desired element from the
									DOM and the corresponding object from the array simultaneously.
									With guidance from my CareerFoundry mentor, I came up with a solution that searched the created array
									for parameters exactly matching the object amounts and descriptions provided by users. Once the item is
									removed, the object amounts are reduced once again to update the user's expense value,
									then this new value is subtracted from the budget value to display a new user balance.
								</p>
							</div>
						</div>
						<div className='cs-border'></div>
					</div>

					<div className="case-study-2-container-4">
						<h1 className="case-study-2-heading cs2-heading-3">Results</h1>
						<p className='case-study-2-body cs2-body-end'>
							The final product took around two weeks to complete.
							The resulting app allows users to set a budget, create and edit a list of expenses dynamically and view their
							remaining balance based upon these inputs. All forms are validated to accept the correct values.
							I learned a lot about the importance of indices in an array, targeting elements in the DOM, parsing user inputs for integers,
							validating fields with conditionals, the CSS grid, and reducing arrays. When approaching
							a project similar to this in the future, I will be sure to work with objects off the bat so dynamically generated information can
							be more descriptive and user friendly.
						</p>
						<div className='cs2-flex-container'>
							<div className='cs2-flex-2'>
								<h3 className='cs2-credits'>Credits</h3>
								<h3 className='cs2-credits'>Role: Lead Developer</h3>
								<h3 className='cs2-credits cs2-credits-end'>Mentor: Gerrit Uit den Boogaart</h3>
							</div>
							<button className='cs-button' onClick={props.onClose}>Close</button>
						</div>

					</div>

				</div>
			</div >
		</div >
	)
} 