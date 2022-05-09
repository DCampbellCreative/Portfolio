import React from 'react';
import './Contact.css';
import Resume from "../../assets/Campbell-Doug-Resume.pdf"
import { ContactForm } from '../ContactForm/ContactForm';

export const Contact = () => {

	const openResume = () => {
		window.open(Resume, "_blank")
	}

	return (
		<footer id='contact'>

			<main className='contact-card'>
				<span className='contact-body cb-1 mb'>Contact Me:</span>
				<ContactForm />
				<div className='contact-card-container'>

					<div className='contact-body'>
						<span className='cb-1'>Connect:</span>
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