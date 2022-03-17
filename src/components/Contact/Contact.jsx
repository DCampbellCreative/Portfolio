import React from 'react';
import './Contact.css';

export const Contact = () => {
	return (
		<footer className='contact-container' id='contact'>
			<main className='contact-card'>
				<div className='contact-card-container'>

					<div className='contact-body'>
						<span className='cb-1'>Contact Me:</span>
						<a className='contact-link' href={require('../../assets/campbell-douglass-resume.pdf')} rel="noopener noreferrer" target="_blank" download>Resume</a>
						<span>/</span>
						<a className='contact-link' href="https://www.linkedin.com/in/douglass-campbell/" rel="noreferrer" target="_blank">LinkedIn</a>
						<span>/</span>
						<a className='contact-link' href="https://github.com/DCampbellCreative/" rel="noreferrer" target="_blank">Github</a>
						<span>/</span>
						<a className='contact-link' id='cl-last-child' href="mailto:dcampbellcreative@gmail.com" rel="noreferrer" target="_blank">Email</a>
					</div>

				</div>
			</main>
		</footer>

	);
}