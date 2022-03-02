import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

	return (
		<div className="nav-bar-container">
			<div className="nav-title-container">
				<img className="logo-image" src={require('../../assets/self_logo-02.png')} alt="dcampbellcreativelogo"></img>
				<h1 className="page-title">DCampbellCreative</h1>
			</div>
			<div className='nav-link-container'>
				<NavLink className={({ isActive }) => (isActive ? 'nav-bar-link-active' : 'nav-bar-link')} to="/home">Home</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'nav-bar-link-active' : 'nav-bar-link')} to="/aboutme">About Me</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'nav-bar-link-active' : 'nav-bar-link')} to="/projects">Projects</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'nav-bar-link-active' : 'nav-bar-link')} to="/resume">Resume</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'nav-bar-link-active' : 'nav-bar-link')} to="/contact">Contact</NavLink>
			</div>
		</div>
	)
}