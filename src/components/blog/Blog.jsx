import React from 'react';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
// import Particle from '../particles/Particle';
import gif_blog_jairocolondev from '../../assets/gifs/gif_blog_jairocolondev.gif'

function Blog() {
	return (
    <div className="w-full h-screen bg-[#fdfdfd]">
      <NavBar />
      {/* <Particle /> */}
			{/* Container */}
			<div className="flex flex-col justify-center max-w-[1080px] mx-auto px-10">
        <p className="text-[#707070] py-4 max-w-[1080px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ad doloribus ipsa!</p>
				<h1 className="text-4xl uppercase font-extrabold text-[#707070] pt-20">
					Aquí estará mi Blog
				</h1>
        <p className="text-[#707070] py-4 max-w-[1080px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum quas quisquam cum perferendis numquam quam deleniti, modi excepturi exercitationem! Soluta dignissimos deleniti eligendi eos possimus corporis illum nisi magni?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum quas quisquam cum perferendis numquam quam deleniti, modi excepturi exercitationem! Soluta dignissimos deleniti eligendi eos possimus corporis illum nisi magni?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum quas quisquam cum perferendis numquam quam deleniti, modi excepturi exercitationem! Soluta dignissimos deleniti eligendi eos possimus corporis illum nisi magni?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum quas quisquam cum perferendis numquam quam deleniti, modi excepturi exercitationem! Soluta dignissimos deleniti eligendi eos possimus corporis illum nisi magni?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum quas quisquam cum perferendis numquam quam deleniti, modi excepturi exercitationem! Soluta dignissimos deleniti eligendi eos possimus corporis illum nisi magni?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum quas quisquam cum perferendis numquam quam deleniti, modi excepturi exercitationem! Soluta dignissimos deleniti eligendi eos possimus corporis illum nisi magni?
        </p>
        <div className="mb-20">
          <img className="rounded-xl" src={gif_blog_jairocolondev} alt="Blog Jairo Colón Developer" />
        </div>
			</div>
      <Footer />
		</div>
	);
}

export default Blog;
