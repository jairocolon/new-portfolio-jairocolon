import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import cv_jairo_colon from '../../assets/pdf/cv.jairocolon.pdf';
import { FormattedMessage } from 'react-intl';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
// import Particle from '../particles/Particle';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';

const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-[#0a192f] z-10">
			<NavBar />
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full z-10">
			{/* <Particle /> */}
				<p className="text-[#fca311] z-10">
					<FormattedMessage
						id="app.greetings"
						defaultMessage="Hola, mi nombre es"
					/>
				</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] z-10">
					Jairo Colón
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] z-10">
					<FormattedMessage
						id="app.frontend"
						defaultMessage="Soy Frontend Developer"
					/>
				</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px] z-10">
					Full-stack Developer, orientado más al lado del cliente como (
					<strong>Frontend Developer</strong>) especializado en construir y
					ocasionalmente diseñar experiencias digitales excepcionales.
					Actualmente, estoy enfocado en construir aplicaciones web responsivas
					full-stack. <br /> Me gusta compartir en equipo, aportar mis
					conocimientos y buena energía, trabajo con metodología scrum.
				</p>
				<div>
					<a href={cv_jairo_colon} download>
						<button className="bg-[#0a192f] text-white font-semibold group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fca311] z-10">
							Descarga mi curriculum
							<span className="group-hover:rotate-90 duration-300 z-10">
								<HiArrowNarrowRight className="ml-3 z-10" />
							</span>
						</button>
					</a>
				</div>
			</div>
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
