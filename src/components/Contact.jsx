import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
	const [state, handleSubmit] = useForm('mpznzqyq');
	if (state.succeeded) {
		return (
			<div className="bg-[#09333f] pt-4">
				<p className="bg-[#09333f] py-4 text-4xl font-semibold text-gray-200 px-5">
					Thanks for contacting me, talk to you soon!
				</p>
			</div>
		);
	}

	return (
		<div
			name="contact"
			className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
		>
			<form
				onSubmit={handleSubmit}
				method="POST"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-[#fca311] text-gray-300">
						Contact
					</p>
					<p className="text-gray-300 py-4">
						Submit the form below or shoot me an email - jairo@jairocolon.com
					</p>
				</div>
				<input
					className="bg-[#ccd6f6] p-2"
					name="name"
					type="text"
					id="name"
					placeholder="Name"
				/>
				<ValidationError prefix="Name" field="name" errors={state.errors} />
				<input
					className="my-4 p-2 bg-[#ccd6f6]"
					id="email"
					type="email"
					name="email"
					placeholder="Email"
				/>
				<ValidationError prefix="Email" field="email" errors={state.errors} />
				<textarea
					className="bg-[#ccd6f6] p-2"
					id="message"
					name="message"
					rows="10"
					placeholder="Message"
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>

				<button
					type="submit"
					disabled={state.submitting}
					className="text-white border-2 hover:bg-[#fca311] hover:border-[#fca311] px-4 py-3 my-8 mx-auto flex items-center"
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default Contact;
