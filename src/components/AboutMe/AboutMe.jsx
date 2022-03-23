import React from 'react';
import './AboutMe.css';

export const AboutMe = () => {
	return (
		<section className='about-me-container' id='about'>
			<main className='about-me-card'>
				<div className='about-me-card-container'>

					<article className='about-me-column-1'>
						<div className='about-me-column-1-container'>
							<h1 className='about-me-heading'>About Me</h1>
							<div className='about-me-body'>
								<p>
									I recently completed the CareerFoundry Full Stack Web Development course.
									I've created projects using JavaScript, React, MongoDB, and NodeJS among others.
									I code daily and love learning new technologies for creating responsive sites and apps.
									I am currently looking for opportunities in the field, and am open to in office or remote roles.
								</p>
								<p>
									Over the last few years, I've owned and operated two restaurants and had to adapt the businesses to prosper during the pandemic.
									I'm proud of myself for meeting those challenges, but it led me to reevaluate my career and realize that I wanted to be in a more creative field.
									I have a bachelor's in Visual Communications and Graphic Design from the University of South Carolina.
									I have developed many ads, print materials, and online content for a variety of companies including my own.
									I'm excited to bring my business management and design skills into my new career.
								</p>
								<p>
									When I'm not coding I enjoy watching films, 90's sitcoms, listening to music, and playing guitar.
									I'm always on the lookout for the newest song or story to inspire me.
									I mainly work in JavaScript libraries and frameworks for frontend and backend.
									My current goals are to learn more about open source contribution and e-commerce technologies.
								</p>
							</div>
						</div>
					</article>

					<article className='about-me-column-2'>
						<div className='about-me-column-2-container'>

							<h1 className='about-me-heading about-me-heading-2'>Skills</h1>

							<div className='row'>
								<ul className='skill-list'>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="li-bullet" />JavaScript</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="li-bullet" />React</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="li-bullet" />CSS3</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="li-bullet" />HTML5</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="li-bullet" />NodeJS</li>
								</ul>

								<ul className='skill-list'>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="li-bullet" />Angular</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="li-bullet" />React Native</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="li-bullet" />Express</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="li-bullet" />GitHub</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="li-bullet" />Adobe Illustrator</li>
								</ul>
							</div>

							<div className='cs-border-2'></div>

							<div className='row'>
								<div className='icon-images'>
									<img className="icon-image" src={require('../../assets/javascript.png')} alt="js-logo" />
									<img className="icon-image" src={require('../../assets/html5.png')} alt="html-logo" />
									<img className="icon-image" src={require('../../assets/css3.png')} alt="css-logo" />
									<img className="icon-image" src={require('../../assets/react.png')} alt="react-logo" />
									<img className="icon-image ii-end" src={require('../../assets/node.png')} alt="node-logo" />
								</div>
							</div>

							<div className='row'>
								<div className='icon-images'>
									<img className="icon-image ii-3" src={require('../../assets/angular.png')} alt="angular-logo" />
									<img className="icon-image" src={require('../../assets/mongo.png')} alt="mongo-logo" />
									<img className="icon-image ii-4" src={require('../../assets/github.png')} alt="github-logo" />
									<img className="icon-image ii-2" src={require('../../assets/express.png')} alt="express-logo" />
									<img className="icon-image ii-3 ii-end" src={require('../../assets/illustrator.png')} alt="illustrator-logo" />
								</div>
							</div>

						</div>
					</article>

				</div>
			</main>
		</section >


	);
}