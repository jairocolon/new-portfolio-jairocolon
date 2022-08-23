import React from 'react';
import CajeMovies from '../assets/cajemovies.png';
import CataHernandez from '../assets/catahernandez.png';
import Generador_de_Contraseñas from '../assets/generador_de_contraseñas.png';
import Paises_Del_mundo from '../assets/paises_del_mundo.png';
import Jaico_Digital from '../assets/jaico_digital.png';
import Creativo_Digital from '../assets/creativo_digital.png';

const Projects = () => {
	return (
		<div
			name="projects"
			className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#fca311]">
						Work
					</p>
					<p className="py-6">Check out some of my recent work</p>
				</div>

				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${CajeMovies})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								React JS Application
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://cajemovies.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/jairocolon/CaJeMovies"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${CataHernandez})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								Html, Css y JavaScript
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://catalinahernandez.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/jairocolon/catalinahernandez"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${Generador_de_Contraseñas})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								Django Application
							</span>
							<div className="pt-8 text-center">
								<a href="/" target="_blank" rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Demo not available
									</button>
								</a>
								<a href="https://github.com/jairocolon/django-generador-contrase-as" target="_blank" rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${Paises_Del_mundo})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								React, Node, JS
							</span>
							<div className="pt-8 text-center">
								<a href="https://pi-countries-jairo-col-n.vercel.app/" target="_blank" rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Demo
									</button>
								</a>
								<a href="https://github.com/jairocolon/PI-Countries-Jairo-Col-n" target="_blank" rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${Jaico_Digital})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
							WordPress Application
							</span>
							<div className="pt-8 text-center">
								<a href="https://jaicodigital.com/" target="_blank" rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Demo
									</button>
								</a>
								{/* <a href="/" target="_blank" rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Code
									</button>
								</a> */}
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${Creativo_Digital})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								WordPress Application
							</span>
							<div className="pt-8 text-center">
								<a href="/" target="_blank" rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Demo
									</button>
								</a>
								{/* <a href="https://creativodigital.com.co/" target="_blank" rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Code
									</button>
								</a> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
