import React from 'react';
import './Home.css';

export const Home = () => {
	return (

		<div className='home-container' id='home'>
			{/* <div className='spacer'></div> */}
			<div className='home-card'>
				<div className='home-card-container'>

					<div className='home-column-1'>
						<img className="self-portrait" src={require('../../assets/self_portrait.png')} alt="self-portrait"></img>
					</div>

					<div className="home-column-2">
						<div className='home-column-2-container'>
							<h1 className='home-heading'>Doug Campbell</h1>
							<p className='home-body'>Full stack developer located in Columbia, SC</p>

							<div className='row-home'>
								<a className="card-button" href={require('../../assets/campbell-douglass-resume.pdf')} rel="noopener noreferrer" target="_blank" download>Resume</a>
								<a className='link-button' href="https://www.linkedin.com/in/douglass-campbell/" rel="noreferrer" target="_blank"><img className="home-icon" src={require('../../assets/linkedin.png')} alt="linkedinlogowhite" /></a>
								<a className='link-button' href="https://github.com/DCampbellCreative/" rel="noreferrer" target="_blank"><img className="home-icon hi-2" src={require('../../assets/github2.png')} alt="githublogowhite" /></a>
								<a className='link-button' href="mailto:dcampbellcreative@gmail.com" rel="noreferrer" target="_blank"><img className="home-icon hi-3" src={require('../../assets/email.png')} alt="emailiconwhite" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>

	);
}