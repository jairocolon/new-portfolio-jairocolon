import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import cv_jairo_colon from '../assets/cv.jairocolon.pdf';

const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-[#0a192f]">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-[#fca311]">Hi, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
					Jairo Colón
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
					I'm a Full Stack Developer.
				</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]">
					I’m a full-stack developer specializing in building (and occasionally
					designing) exceptional digital experiences. Currently, I’m focused on
					building responsive full-stack web applications.
				</p>
				<div>
					<a href={cv_jairo_colon} download>
						<button className="text-white font-semibold group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fca311] hover:border-pink-[#fca311]">
							Download Resumen
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
