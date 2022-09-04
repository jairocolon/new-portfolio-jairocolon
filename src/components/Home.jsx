import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import cv_jairo_colon from '../assets/cv.jairocolon.pdf';

const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-[#0a192f]">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-[#fca311]">Hola, mi nombre es</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
					Jairo Colón
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
					Soy Frontend Developer
				</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]">
					Full-stack Developer, orientado más al lado del cliente como (
					<strong>Frontend Developer</strong>) especializado en construir y
					ocasionalmente diseñar experiencias digitales excepcionales.
					Actualmente, estoy enfocado en construir aplicaciones web responsivas
					full-stack. <br /> Me gusta compartir en equipo, aportar mis
					conocimientos y buena energía, trabajo con metodología scrum.
				</p>
				<div>
					<a href={cv_jairo_colon} download>
						<button className="text-white font-semibold group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fca311] hover:border-pink-[#fca311]">
							Descarga mi curriculum
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowNarrowRight className="ml-3 " />
							</span>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
