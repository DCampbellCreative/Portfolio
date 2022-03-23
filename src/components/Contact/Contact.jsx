import React from 'react';
import './Contact.css';
import Resume from "../../assets/campbell-douglass-resume.pdf"

export const Contact = () => {

	const openResume = () => {
		window.open(Resume, "_blank")
	}

	return (
		<footer className='contact-container' id='contact'>
			<main className='contact-card'>
				<div className='contact-card-container'>

					<div className='contact-body'>
						<span className='cb-1'>Contact Me:</span>
						<a className='contact-link' href={Resume} onClick={openResume} rel="noopener noreferrer" target="_blank" >Resume</a>
						<span>/</span>
						<a className='contact-link' href="https://www.linkedin.com/in/douglass-campbell/" rel="noreferrer" target="_blank">LinkedIn</a>
						<span>/</span>
						<a className='contact-link' href="https://github.com/DCampbellCreative/" rel="noreferrer" target="_blank">Github</a>
						<span>/</span>
						<a className='contact-link' id='cl-last-child' href="https://dougcampbell.blog/" rel="noreferrer" target="_blank">Blog</a>
						{/* <span>/</span>
						<a className='contact-link' id='cl-last-child' href="mailto:dcampbellcreative@gmail.com" rel="noreferrer" target="_blank">Email</a> */}
					</div>

				</div>
			</main>
		</footer>

	);
}