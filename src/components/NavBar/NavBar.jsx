import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<div className="nav-bar-container">
			<h1 className="page-title">DCampbellCreative</h1>
			<NavLink className="nav-bar-link" to="/home">Home</NavLink>
			<NavLink className="nav-bar-link" to="/aboutme">About Me</NavLink>
			<NavLink className="nav-bar-link" to="/">Projects</NavLink>
			<NavLink className="nav-bar-link" to="/resume">Resume</NavLink>
			<NavLink className="nav-bar-link" to="/contact">Contact</NavLink>
		</div>
	)
}