import React from 'react';
import './AboutMe.css';

export const AboutMe = () => {
	return (
		<div className='about-me-container' id='about'>

			<div className='about-me-card'>
				<div className='about-me-card-container'>

					<div className='about-me-column-1'>
						<div className='about-me-column-1-container'>
							<h1 className='about-me-heading'>About Me</h1>
							<div className='about-me-body'>
								<p>
									Over the last few years I've owned and ran two restaurants and had to adapt the businesses to survive and prosper during the pandemic.
									I'm proud of myself for meeting those challenges but it also led me to reevaluate my career and come to the realization that I wanted to be in a more creative field.
									I studied Visual Communications at the University of South Carolina with a minor in graphic design.
									I have developed many ads, print materials, and online content for a variety of companies, including my own.
								</p>
								<p>
									When I'm not coding I enjoy watching films, 90's sitcoms, listening to music, and playing guitar.
									I find learning a programming language is very similar to learning an instrument.
									I'm always on the lookout for the newest song or story to move and inspire me.
								</p>
							</div>
						</div>
					</div>

					<div className='about-me-column-2'>
						{/* <div className='about-me-column-2-container'> */}

						<h1 className='about-me-heading about-me-heading-2'>Skills</h1>

						<div className='row cs-border border-2'>
							<div className='list-column lc-1'>
								<ul className='skill-list'>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="hexbullet" />JavaScript</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="hexbullet" />React</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="hexbullet" />CSS3</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="hexbullet" />HTML5</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="hexbullet" />NodeJS</li>
								</ul>
							</div>

							<div className='list-column lc-2'>
								<ul className='skill-list'>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="hexbullet" />Angular</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="hexbullet" />React Native</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="hexbullet" />Express</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="hexbullet" />GitHub</li>
									<li className='about-me-list-body'><img className="li-bullet" src={require('../../assets/hexbullet.png')} alt="hexbullet" />Adobe Illustrator</li>
								</ul>
							</div>
						</div>

						<div className='row'>
							<div className='icon-images'>
								<img className="icon-image" src={require('../../assets/javascript.png')} alt="hexbullet" />
								<img className="icon-image" src={require('../../assets/html5.png')} alt="hexbullet" />
								<img className="icon-image" src={require('../../assets/css3.png')} alt="hexbullet" />
								<img className="icon-image" src={require('../../assets/react.png')} alt="hexbullet" />
								<img className="icon-image" src={require('../../assets/node.png')} alt="hexbullet" />
								<img className="icon-image" src={require('../../assets/angular.png')} alt="hexbullet" />
								<img className="icon-image" src={require('../../assets/mongo.png')} alt="hexbullet" />
								<img className="icon-image ii-3" src={require('../../assets/github.png')} alt="hexbullet" />
								<img className="icon-image ii-2" src={require('../../assets/express.png')} alt="hexbullet" />
								<img className="icon-image" src={require('../../assets/illustrator.png')} alt="hexbullet" />
							</div>
						</div>

					</div>
					{/* </div> */}
				</div>

			</div>
		</div >


	);
}