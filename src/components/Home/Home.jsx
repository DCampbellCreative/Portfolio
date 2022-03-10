import React from 'react';
import './Home.css';

export const Home = () => {
	return (

		<section className='home-container' id='home'>
			<main className='home-card'>
				<div className='home-card-container'>

					<div className='home-column-1'>
						<img className="self-portrait" src={require('../../assets/self_portrait.png')} alt="self-portrait"></img>
					</div>

					<div className="home-column-2">
						<div className='home-column-2-container'>
							<h1 className='home-heading'>Doug Campbell</h1>
							<p className='home-body'>Full Stack Developer | Columbia, SC</p>

							<div className='row-home'>
								<a className="card-button card-button-home" href={require('../../assets/campbell-douglass-resume.pdf')} rel="noopener noreferrer" target="pdf-frame" download>Resume</a>
								<a className='card-button card-button-home' href="https://github.com/DCampbellCreative/" rel="noreferrer" target="_blank">GitHub</a>

							</div>
						</div>
					</div>
				</div>
			</main>

		</section>

	);
}