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
							<h1 className='home-heading'>Welcome</h1>
							<p className='home-body'>Hi, my name is Doug Campbell. I'm a web developer with a background in graphic design and the restaurant industry.
								I have a strong eye for design with frontend, backend, and UI skills. I'm a quick learner with a passion for Technology.
								Looking to be part of a team of passionate professionals, and develop projects for the greater good.</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}