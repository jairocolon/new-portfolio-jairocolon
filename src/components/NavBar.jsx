import React, { useState, /*useContext*/ } from 'react';
import {
	FaBars,
	FaTimes,
	FaGithub,
	FaLinkedin,
	FaTwitter,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
// import flagES from '../assets/colombia.png';
// import flagEN from '../assets/us.png';
import { Link } from 'react-scroll';
// import { languageContext } from '../context/languageContext';

const NavBar = () => {
	// const language = useContext(languageContext);
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen(!isOpen);

	return (
		<div
			className="fixed w-full h-[80px] flex justify-between items-center 
       px-4 bg-[#09333f] text-gray-200 z-50"
		>
			<div>
				<a href="/">
					<img
					  className='ml-6'
						src={Logo}
						alt="Jairo Colón Developer"
						style={{ width: '80px' }}
					/>
				</a>
			</div>

			{/* Menú */}
			<ul className="hidden md:flex">
				<li>
					<Link
						className="uppercase hover:underline"
						to="home"
						smooth={true}
						duration={500}
					>
						Inicio
					</Link>
				</li>
				<li>
					<Link
						className="uppercase hover:underline"
						to="about"
						smooth={true}
						duration={500}
					>
						Sobre mi
					</Link>
				</li>
				<li>
					<Link
						className="uppercase hover:underline"
						to="projects"
						smooth={true}
						duration={500}
					>
						Proyectos
					</Link>
				</li>
				<li>
					<Link
						className="uppercase hover:underline"
						to="skills"
						smooth={true}
						duration={500}
					>
						Habilidades
					</Link>
				</li>
				<li>
					<Link
						className="uppercase hover:underline"
						to="contact"
						smooth={true}
						duration={500}
					>
						Contactame
					</Link>
				</li>
			</ul>
			{/* <div className="flex gap-4 mr-6">
				<button onClick={() => language.changeLanguage('es-MX')}>
					<img style={{ width: 40, height: 40 }} src={flagES} alt="" />
				</button>
				<button onClick={() => language.changeLanguage('en-US')}>
					<img style={{ width: 40, height: 40 }} src={flagEN} alt="" />
				</button>
			</div> */}

			{/* Menú Hamburguesa */}
			<div onClick={handleClick} className="md:hidden z-10 transition">
				{!isOpen ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile Menú */}
			<ul
				className={
					!isOpen
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-[#09333f] flex flex-col justify-center items-center duration-500 ease-in-out'
				}
			>
				<li className="py-6 text-4xl">
					<Link
						className="uppercase hover:underline"
						onClick={handleClick}
						to="home"
						smooth={true}
						duration={500}
					>
						Inicio
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
					<Link
						className="uppercase hover:underline"
						onClick={handleClick}
						to="about"
						smooth={true}
						duration={500}
					>
						Sobre mi
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
					<Link
						className="uppercase hover:underline"
						onClick={handleClick}
						to="projects"
						smooth={true}
						duration={500}
					>
						Proyectos
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
					<Link
						className="uppercase hover:underline"
						onClick={handleClick}
						to="skills"
						smooth={true}
						duration={500}
					>
						Habilidades
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
					<Link
						className="uppercase hover:underline"
						onClick={handleClick}
						to="contact"
						smooth={true}
						duration={500}
					>
						Contactame
					</Link>
				</li>
			</ul>

			{/* Social Icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] 
            hover:ml-[-10px] duration-300 bg-[#5b6fff]"
					>
						<a
							className="flex justify-between items-center w-full text-white"
							href="https://www.linkedin.com/in/jairocolondeveloper/"
							target="_blank"
							rel="noreferrer"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] 
            hover:ml-[-10px] duration-300 bg-[#09333f]"
					>
						<a
							className="flex justify-between items-center w-full text-gray-100"
							href="https://github.com/jairocolon"
							target="_blank"
							rel="noreferrer"
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] 
            hover:ml-[-10px] duration-300 bg-[#fca311]"
					>
						<a
							className="flex justify-between items-center w-full text-white"
							href="https://twitter.com/jairocolondev"
							target="_blank"
							rel="noreferrer"
						>
							Twitter <FaTwitter size={30} />
						</a>
					</li>
					<li
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] 
            hover:ml-[-10px] duration-300 bg-[#5e5e5e]"
					>
						<a
							className="flex justify-between items-center w-full text-white"
							href="https://drive.google.com/file/d/1q0MM4dXIu9AkeJGhtIGg0Yf3K1XA0z75/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Curriculum <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
