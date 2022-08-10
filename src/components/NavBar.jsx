import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen(!isOpen);

	return (
		<div
			className="fixed w-full h-[80px] flex justify-between items-center 
       px-4 bg-[#09333f] text-gray-200"
		>
			<div>
				<a href="/">
					<img
						src={Logo}
						alt="Jairo Colón Developer"
						style={{ width: '150px' }}
					/>
				</a>
			</div>

			{/* Menú */}
			<ul className="hidden md:flex">
				<li>
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="projects" smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Menú Hamburguesa */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!isOpen ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile Menú */}
			<ul
				className={
					!isOpen
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-[#09333f] flex flex-col justify-center items-center opacity-90 transition-opacity duration-500 ease-in-out'
				}
			>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
					<Link
						onClick={handleClick}
						to="projects"
						smooth={true}
						duration={500}
					>
						Projects
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
					<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
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
							href="jairo@jairocolon.com"
							target="_blank"
							rel="noreferrer"
						>
							Mail <HiOutlineMail size={30} />
						</a>
					</li>
					<li
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] 
            hover:ml-[-10px] duration-300 bg-[#5e5e5e]"
					>
						<a
							className="flex justify-between items-center w-full text-white"
							href="https://drive.google.com/file/d/1LCGgLKGOpg8NBBgQf5U_c1yNO17u_qqk/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							Resumen <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
