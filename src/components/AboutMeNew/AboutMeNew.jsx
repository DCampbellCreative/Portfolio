import React from 'react'
import { IconCode, IconBrush } from '@tabler/icons';

// STYLING
import './AboutMeNew.css';

// IMAGES
import devImage1 from '../../assets/react.png';
import devImage2 from '../../assets/javascript.png';
import devImage3 from '../../assets/html5.png';
import devImage4 from '../../assets/css3.png';
import desImage1 from '../../assets/illustrator.png'
import desImage2 from '../../assets/figma.png'

export const AboutMeNew = () => {
	const devImages = [devImage1, devImage2, devImage3, devImage4]
	const desImages = [desImage1, desImage2]
	return (
		<div className="amn-container">
			<h1 className='amn-heading-1'>About Me</h1>

			<div className="amn-row">
				<div className='amn-card-1'>
					<img className='amn-portrait' src={require('../../assets/self-portrait-min.png')} alt='Doug Campbell' />
					<p className='amn-body justify'>Frontend developer with passion for creating for creating responsive sites and apps. I enjoy watching films, 90's sitcoms, listening to music, and playing guitar. I'm always on the lookout for the newest song or story to inspire me.</p>
				</div>

				<div className='amn-card'>
					<IconCode
						className='amn-margin'
						size={48}
						color="#44A1A0"
						stroke={2}
					/>
					<h2 className='amn-heading'>Frontend<br />Development</h2>
					<p className='amn-body'>1 year experience including internship and contract positions. Focus on React and JavaScript. Well versed in CSS frameworks and component libraries including TailwindCSS and Mantine UI. Fully responsive pages using Webflow and Editor X.</p>
					<div className="gap">
						{devImages.map(img => (<div className="amn-image-bg"><img className='amn-image' src={img} alt="icon" /></div>))}
					</div>
				</div>
				<div className='amn-card'>
					<IconBrush
						className='amn-margin'
						size={48}
						color="#44A1A0"
						stroke={2}
					/>
					<h2 className='amn-heading'>Graphic<br />&&nbsp;UI Design</h2>
					<p className='amn-body'>Bachelor's degree in Visual Communications, with minor in Graphic Design, from the University of South Carolina. Over 15 years experience designing ads, print materials, and online content using Adobe Creative Suite and other tools.</p>
					<div className="gap">
						{desImages.map(img => (<div className="amn-image-bg" key={img}><img className='amn-image' src={img} alt="icon" /></div>))}
					</div>
				</div>
			</div>
		</div>
	)
}