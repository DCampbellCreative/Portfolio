import React from 'react';
import './Home.css';
import Resume from "../../assets/Campbell-Doug-Resume.pdf";

export const Home = () => {

	const openResume = () => {
		window.open(Resume, "_blank")
	}

	return (



		<section className='home-container' id='home'>
			<main className='home-card'>
				<div className='home-card-container'>

					<div className='home-column-1'>
						<img className="self-portrait" src='https://i.ibb.co/Rzf65Gj/self-portrait.png' alt="Doug Campbell" />
					</div>

					<div className="home-column-2">
						<div className='home-column-2-container'>
							<h1 className='home-heading'>Doug Campbell</h1>
							<div className='home-body'>Front End Developer | Columbia, SC</div>

							<div className='row-home'>
								<a className="card-button-home" href={Resume} onClick={openResume} rel="noopener noreferrer" target="_blank">Resume</a>
								<a className='card-button-home' href="https://github.com/DCampbellCreative/" rel="noreferrer" target="_blank">GitHub</a>

							</div>
						</div>
					</div>
				</div>
			</main>

		</section>

	);
}