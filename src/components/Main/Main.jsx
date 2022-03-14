import React, { useState, useEffect } from 'react';

import { NavBar } from '../NavBar/NavBar';
import { Home } from '../Home/Home';
import { AboutMe } from '../AboutMe/AboutMe'
import { MyWork } from '../MyWork/MyWork';
import { Contact } from '../Contact/Contact';
import { MyWorkMobile } from '../MyWorkMobile/MyWorkMobile';

export const Main = () => {

	const [width, setWidth] = useState(false);
	const updateWidth = () => {
		setWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener("load", updateWidth);
		return () => window.removeEventListener("load", updateWidth);
	});

	useEffect(() => {
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	});


	console.log(width);

	return (
		<div>
			<NavBar />
			<Home />
			<AboutMe />
			{width < 786 ? <MyWorkMobile /> : <MyWork />}
			<Contact />
		</div>
	);
}

