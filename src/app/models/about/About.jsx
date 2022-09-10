import React from 'react';
import Footer from '../../models/footer/Footer';

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0a192f] text-gray-200 z-10">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-[#fca311]">
							Sobre mi
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>
							Hola de nuevo, soy Jairo Colón, encantado de que estés aquí. Por
							favor, mira lo que hago y si gustas estoy disponible para ti y tu
							equipo.
						</p>
					</div>
					<div>
						<p>
							Me apasiona la creación de software, diseñar y desarrollar
							aplicaciones y páginas web, al igual que aplicaciones móviles, con
							la mejor experiencia de usuario posible y sitios adaptables a
							todos los dispositivos. Además, todos los sitios web los optimizo
							desde su estructura para <strong>SEO</strong> (Search Engine
							Optimization) y <strong>MS</strong> (Marketing strategies).
							<p className="py-2">
								¿Qué harías si tuvieras un desarrollador de software a la mano?
							</p>
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
