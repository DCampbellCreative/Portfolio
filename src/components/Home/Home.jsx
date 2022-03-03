import React from 'react';
import './Home.css';

export const Home = () => {
	return (
		<div className='home-container'>

			<div className='home-card'>
				<div className='home-card-container'>

					<div className='home-column-1'>
						<img className="self-portrait" src={require('../../assets/self_portrait.png')} alt="self-portrait"></img>
					</div>

					<div className="home-column-2">
						<div className='home-column-2-container'>
							<h1 className='home-heading'>Hi, my name is Doug Campbell</h1>
							<p className='home-body'>I'm a web developer located in Columbia, SC</p>
							<a className="card-button" href="https://github.com/DCampbellCreative/react-pokedex" rel="noreferrer" target="_blank">Resume</a>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}