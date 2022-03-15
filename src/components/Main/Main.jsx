import React from 'react';

import { NavBar } from '../NavBar/NavBar';
import { Home } from '../Home/Home';
import { AboutMe } from '../AboutMe/AboutMe'
import { MyWork } from '../MyWork/MyWork';
import { Contact } from '../Contact/Contact';
import { MyWorkMobile } from '../MyWorkMobile/MyWorkMobile';

export const Main = (props) => {
	return (
		<div>
			<NavBar />
			<Home />
			<AboutMe />
			{props.width < 786 ? <MyWorkMobile /> : <MyWork />}
			<Contact />
		</div>
	);
}

