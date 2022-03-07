import React, { useState } from 'react';
import './NavBar.css';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

export const NavBar = () => {
	const active = 'nav-bar-link-active'
	const [clicked, setClicked] = useState('home')


	const findActiveClass = (myClass) => myClass === clicked ? active : ''
	const scrollToBottom = () => {
		scroll.scrollToBottom();
	}
	const scrollTo1 = () => {
		scroll.scrollTo(1);
	}

	const scrollTo2 = () => {
		scroll.scrollTo(350);
	}

	const scrollTo3 = () => {
		scroll.scrollTo(775);
	}

	return (

		<div className="nav-bar-container">
			<div className="nav-title-container">
				<img className="logo-image" src={require('../../assets/hexlogo-01.png')} alt="dcampbellcreativelogo"></img>
				{/* <h1 className="page-title">DCampbellCreative</h1> */}
			</div>
			<div className='nav-link-container'>

				<div className='nav-link-container'>
					<Link className='nav-bar-link ' offset={-75} to="home" spy={true} smooth={true}>Home</Link>
					<Link className='nav-bar-link ' offset={-100} to="about" spy={true} smooth={true}>About Me</Link>
					<Link className='nav-bar-link ' offset={-100} to="projects" spy={true} smooth={true}>Projects</Link>
					<Link className='nav-bar-link ' to="contact" spy={true} smooth={true}>Contact</Link>
				</div>
				{/* <Link className={`nav-bar-link ${findActiveClass('home')}`} to="home" onClick={() => setClicked('home')} spy={true} offsmooth={true}>Home</Link> */}
				{/* <Link className='nav-bar-link' activeClass='nav-bar-link-active' onClick={scrollTo1} spy={true} smooth={true}>About Me</Link> */}
				{/* <Link className='nav-bar-link' activeClass='nav-bar-link-active' onClick={scrollTo2} spy={true} smooth={true}>About Me</Link> */}
				{/* <Link className='nav-bar-link' activeClass='nav-bar-link-active' onClick={scrollTo3} spy={true} smooth={true}>Projects</Link> */}
				{/* <NavLink className={({ isActive }) => (isActive ? 'nav-bar-link-active' : 'nav-bar-link')} to="/resume">Resume</NavLink> */}
				{/* <Link className='nav-bar-link' activeClass='nav-bar-link-active' onClick={scrollToBottom} spy={true} smooth={true}>Contact</Link> */}


			</div>
		</div>
	)
}