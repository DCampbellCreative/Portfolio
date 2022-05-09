import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactForm.css'

export const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('contact_service', 'contact_form', form.current, 'ricvyJgj76QPQnqUM')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};


	return (
		<form ref={form} onSubmit={sendEmail} className='contact-form-container'>
			<div className='form-group'>
				<label className="input-label" htmlFor='name'>Name:</label>
				<input className="input-field" type="text" name="user_name" placeholder="Enter your name" required />
			</div>
			<div className='form-group'>
				<label className="input-label" htmlFor='email'>Email:</label>
				<input className="input-field" type="email" name="user_email" placeholder="Enter your email" required />
			</div>
			<div className='form-group'>
				<label className="input-label" htmlFor='message'>Message:</label>
				<textarea className="input-field if-text" name="message" required />
			</div>
			<button className="contact-button" type="submit" value="Send">Submit</button>
		</form>
	)
}