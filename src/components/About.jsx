import React from 'react';

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0a192f] text-gray-200">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-[#fca311]">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>Hi. I'm Jairo, nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p>
							I am passionate about creating software, I love to create
							websites, mobile apps, with the best user experience and sites
							adaptable to all devices. In addition, all websites are optimized
							for <strong>SEO</strong> and <strong>DMS</strong> (Digital
							Marketing Strategies).
							<p className="py-2">
								¿What would you do if you had a software developer at hand?
							</p>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
