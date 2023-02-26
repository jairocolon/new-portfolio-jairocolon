import React from 'react';
import ItemsContainer from './ItemsContainer';
import SocialIcons from './SocialIcons';
import { ICONS, TERMS } from './Menus';
import Item from './Item';

const Footer = () => {
	return (
		<footer className="bg-black text-white z-50">
			<div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
				<h1
					className="lg:text-4xl ml-10 text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
				>
					<span className="text-teal-400">¿Quieres</span> un Desarrollador Web para tu proyecto?
				</h1>
				<div>
					<input
						type="text"
						placeholder="Ingresa tu correo electrónico"
						className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
					/>
					<button
						className="bg-[#8624e1] hover:bg-[#fb5607] duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white font-semibold md:w-auto w-full"
					>
						Enviar ahora  
					</button>
				</div>
			</div>
			<ItemsContainer />
			<div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
			>
				<span>© 2020 - 2023 Todos los Derechos Reservados Jairo Colón</span>
			  <Item Links={TERMS} />
				<SocialIcons Icons={ICONS} />
			</div>
		</footer>
	);
};

export default Footer;
