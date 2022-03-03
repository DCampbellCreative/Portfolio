import React from 'react';
import './AboutMe.css';

export const AboutMe = () => {
	return (
		<div className='about-me-container'>

			<div className='about-me-card'>
				<div className='about-me-card-container'>

					<div className='about-me-column-1'>
						<div className='about-me-column-1-container'>
							<h1 className='about-me-heading'>About Me</h1>
							<p className='about-me-body'>
								Over the last few years I've owned and ran two restaurants and had to adapt the businesses to survive and prosper during the pandemic.
								I'm proud of myself for meeting those challenges but it also led me to reevaluate my career and come to the realization that I wanted to be in a more creative field.
								I studied Visual Communications at the University of South Carolina with a minor in graphic design.
								I have developed many ads, print materials, and online content for a variety of companies, including my own.
								When I'm not coding I enjoy watching films, 90's sitcoms, listening to music, and playing guitar.
								I find learning a programming language is very similar to learning an instrument.
								I'm always on the lookout for the newest song or story to move and inspire me.
							</p>
						</div>
					</div>

					{/* <div className='about-me-column-2'>
						<div className='about-me-column-2-container'>
							<h1 className='about-me-heading'>Interests</h1>
							<p className='about-me-body'>
								When I'm not coding or designing I enjoy gaming, films, comics, food, and music.
								I have an extensive collection of vinyl I listen to daily and have played guitar for 20 years now.
								I find learning a programming language is very similar to learning an instrument.
								I'm always on the lookout for the newest song or story to move and inspire me.
							</p>
						</div>
					</div> */}

					<div className='about-me-column-2'>
						<div className='about-me-column-2-container'>
							<h1 className='about-me-heading'>Skills</h1>
							<p className='about-me-body'>
								<ul className='skill-list'>
									<li>Abode Illustrator</li>
									<li>Angular</li>
									<li>CSS</li>
									<li>GitHub</li>
									<li>HTML</li>
									<li>JavaScript</li>
									<li>React</li>
								</ul>
							</p>
						</div>
					</div>

				</div>
			</div>

		</div>
	);
}