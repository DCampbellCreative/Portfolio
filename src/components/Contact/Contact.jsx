import React from 'react';
import './Contact.css';

export const Contact = () => {
	return (

		<div className='contact-container' id='contact'>
			{/* <div className='spacer'></div> */}
			<div className='contact-card'>
				<div className='contact-card-container'>

					<div className='contact-column-1'>
						<div className='contact-column-container'>
							<img className="contact-logo" src={require('../../assets/hexlogo-01.png')} alt="self-portrait"></img>
						</div>
					</div>

					<div className="contact-column-2">
						<div className='contact-column-container'>
							<a className='contact-icon' href={require('../../assets/campbell-douglass-resume.pdf')} rel="noopener noreferrer" target="_blank" download>	<span className='contact-body'><img className="home-icon" src={require('../../assets/resume-icon.png')} alt="resumelogowhite" />Download my resume</span></a>
							<a className='contact-icon' href="https://www.linkedin.com/in/douglass-campbell/" rel="noreferrer" target="_blank"><span className='contact-body'><img className="home-icon" src={require('../../assets/linkedin.png')} alt="linkedinlogowhite" />Add me on LinkedIn</span></a>
						</div>
					</div>

					<div className="contact-column-3">
						<div className='contact-column-container'>
							<a className='contact-icon' href="https://github.com/DCampbellCreative/" rel="noreferrer" target="_blank"><span className='contact-body'><img className="home-icon hi-2" src={require('../../assets/github2.png')} alt="githublogowhite" />Check out my Github</span></a>
							<a className='contact-icon' href="mailto:dcampbellcreative@gmail.com" rel="noreferrer" target="_blank"><span className='contact-body'><img className="home-icon hi-3" src={require('../../assets/email.png')} alt="emailiconwhite" />Email me directly</span></a>
						</div>
					</div>
				</div>

			</div>

		</div >

	);
}