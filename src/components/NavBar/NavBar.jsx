import React from 'react';
import './NavBar.css';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

export const NavBar = () => {
	const scrollToBottom = () => {
		scroll.scrollToBottom();
	}
	return (
		<div className="nav-bar-container">
			<div className="nav-title-container">
				<img className="logo-image" src={require('../../assets/hexlogo-01.png')} alt="dcampbellcreativelogo"></img>
				{/* <h1 className="page-title">DCampbellCreative</h1> */}
			</div>
			<div className='nav-link-container'>
				<Link className='nav-bar-link' activeClass='nav-bar-link-active' to="home" spy={true} smooth={true}>Home</Link>
				<Link className='nav-bar-link' activeClass='nav-bar-link-active' to="about" spy={true} smooth={true}>About Me</Link>
				<Link className='nav-bar-link' activeClass='nav-bar-link-active' to="projects" spy={true} smooth={true}>Projects</Link>
				{/* <NavLink className={({ isActive }) => (isActive ? 'nav-bar-link-active' : 'nav-bar-link')} to="/resume">Resume</NavLink> */}
				<Link className='nav-bar-link' activeClass='nav-bar-link-active' onClick={scrollToBottom} spy={true} smooth={true}>Contact</Link>


			</div>
		</div>
	)
}