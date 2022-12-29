import React from 'react';

import { NavBar } from '../NavBar/NavBar';
import { Home } from '../Home/Home';
import { AboutMe } from '../AboutMe/AboutMe'
import { AboutMeNew } from '../AboutMeNew/AboutMeNew';
import { MyWork } from '../MyWork/MyWork';
import { Contact } from '../Contact/Contact';
import { MyWorkMobile } from '../MyWorkMobile/MyWorkMobile';

import Resume from "../../assets/Campbell-Doug-Resume.pdf"

export const Main = (props) => {
	const openResume = () => {
		window.open(Resume, "_blank")
	}
	return (
		<div>
			<NavBar />
			{/* <Home /> */}
			{/* <AboutMe /> */}
			<AboutMeNew openResume={openResume} />
			{props.width < 900 ? <MyWorkMobile /> : <MyWork />}
			<Contact openResume={openResume} />
		</div>
	);
}

