import React from 'react';
import CajeMovies from '../../../_metronic/assets/img/cajemovies.png';
import CataHernandez from '../../../_metronic/assets/img/catahernandez.png';
import Generador_de_Contraseñas from '../../../_metronic/assets/img/generador_de_contraseñas.png';
import Paises_Del_mundo from '../../../_metronic/assets/img/paises_del_mundo.png';
import Padela_traductor from '../../../_metronic/assets/img/padela-traductor-portfolio-jairocolondev.png';
import Media_Book from '../../../_metronic/assets/img/media_book.png';

const Projects = () => {
	return (
		<div
			name="projects"
			className="w-full md:h-screen text-gray-300 bg-[#0a192f] z-10"
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#fca311]">
						Proyectos
					</p>
					<p className="py-6">Estos son algunos de mis trabajos recientes</p>
				</div>

				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 z-10">
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${CajeMovies})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								Desarrollo con JS, React
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://cajemovies.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Ver sitio
									</button>
								</a>
								<a
									href="https://github.com/jairocolon/CaJeMovies"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Ver Código
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
										Ver sitio
									</button>
								</a>
								<a
									href="https://github.com/jairocolon/catalinahernandez"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Ver código
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
								Desarrollo con Django
							</span>
							<div className="pt-8 text-center">
								<a href="/" target="_blank" rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Sitio no disponible
									</button>
								</a>
								<a
									href="https://github.com/jairocolon/django-generador-contrase-as"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Ver código
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
								<a
									href="https://pi-countries-jairo-col-n.vercel.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Ver sitio
									</button>
								</a>
								<a
									href="https://github.com/jairocolon/PI-Countries-Jairo-Col-n"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Ver código
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${Padela_traductor})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								Desarrollo con JavaScript
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://padela-traductor.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Ver sitio
									</button>
								</a>
								<a
									href="https://github.com/jairocolondev/padela-traductor"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Ver código
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${Media_Book})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								Desarrollado con React
							</span>
							<div className="pt-8 text-center">
								<a href="https://jairocolondev.github.io/media-book/" target="_blank" rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Ver sitio
									</button>
								</a>
								<a href="https://github.com/jairocolondev/media-book" target="_blank" rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-cyan-900 hover:text-white">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
