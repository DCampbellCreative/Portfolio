import React from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

export const NavBar = () => {
	return (
		<nav className="nav-bar-container">
			<div className="nav-title-container">
				<img className="logo-image" src={require('../../assets/hexlogo-01.png')} alt="Doug Campbell Logo"></img>
			</div>
			<div className='nav-link-container'>
				<div className='nav-link-container'>
					<Link className='nav-bar-link' offset={-100} to="home" spy={true} smooth={true}>About</Link>
					<Link className='nav-bar-link' offset={-100} to="projects" spy={true} smooth={true}>Work</Link>
					<Link className='nav-bar-link' to="contact" spy={true} smooth={true}>Contact</Link>
					<a className='nav-bar-link' href="https://dougcampbell.blog/" rel="noreferrer" target="_blank">Blog</a>
				</div>
			</div>

		</nav>
	)
}