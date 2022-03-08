import React, { useState } from 'react';
import './NavBar.css';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

export const NavBar = () => {

	return (
		<div className="nav-bar-container">
			<div className="nav-title-container">
				<img className="logo-image" src={require('../../assets/hexlogo-01.png')} alt="dcampbellcreativelogo"></img>
			</div>
			<div className='nav-link-container'>

				<div className='nav-link-container'>
					<Link className='nav-bar-link ' offset={-75} to="home" spy={true} smooth={true}>Home</Link>
					<Link className='nav-bar-link ' offset={-100} to="about" spy={true} smooth={true}>About</Link>
					<Link className='nav-bar-link ' offset={-100} to="projects" spy={true} smooth={true}>Projects</Link>
					<Link className='nav-bar-link ' to="contact" spy={true} smooth={true}>Contact</Link>
				</div>

			</div>
		</div>
	)
}