import React from 'react';
// import Particle from '../particles/Particle';
import NavBar from '../../pages/layout/navToolBar/NavBar';
import Footer from '../../models/footer/Footer';

const Mobile = () => {
	return (
		<div name="home" className="w-full bg-[#0a192f] z-10">
			<NavBar />
			{/* Container */}
			<div className="flex flex-col justify-center pt-32 max-w-[1080px] mx-auto px-8">
			{/* <Particle /> */}
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] uppercase">
					Desarrollo Móvil
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
					Esta página está en Construcción
				</h2>
				<p className="text-[#8892b0] py-6 max-w-[700px]">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, minima velit. Sequi, nam iste hic, perferendis, nisi dignissimos dolores reprehenderit veniam ipsum optio corrupti quam tempora tenetur ab odit sit maxime dolor ullam qui vero et nostrum nulla dicta. Sint saepe error sequi, officiis, rerum eos eveniet fugit delectus eius voluptates praesentium aliquam sed et unde repudiandae qui facilis voluptatem quasi dolor necessitatibus aspernatur consequuntur assumenda! Velit ab optio sapiente explicabo, similique, eaque quas numquam voluptas, fugiat commodi soluta! Commodi suscipit eaque sequi quis mollitia ratione vel optio expedita? Quia, consequatur earum eos, ducimus nam libero deleniti ipsam, incidunt adipisci repudiandae exercitationem eligendi commodi sequi aliquid! Adipisci in molestias iste reprehenderit praesentium eius nemo suscipit possimus obcaecati repellat aliquid amet aut, tenetur natus, voluptas provident laboriosam asperiores facilis mollitia incidunt ducimus ad sit quasi eos. Dolore architecto illo cum omnis? Voluptas corporis iusto temporibus blanditiis quo harum asperiores sequi dicta accusamus velit quis, tempora ex voluptatibus ullam quas soluta animi in accusantium neque minima quidem cupiditate reiciendis. Culpa beatae esse neque cumque cum impedit rem fugit porro quo, veritatis, illo rerum omnis iure animi assumenda similique molestiae, expedita quae commodi cupiditate deleniti? Exercitationem quasi porro ad itaque earum quibusdam quam?
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default Mobile;
