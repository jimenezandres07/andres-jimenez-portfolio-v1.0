import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";
import { GlobalContainer } from "../../Containers/Containers";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_d1qslhq",
				"template_s8diytq",
				form.current,
				"vRf8xgfq1e-St_MNm"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
			window.alert("Your message has been succesfully sent")
			e.target.reset();
	};

	return (
		<section id="contact">
			<h5 className="color-light">Ponte en contacto</h5>
			<h2>Contactame</h2>

			<GlobalContainer className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<AiOutlineMail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>jandres604@gmail.com</h5>
						<a href="mailto:jandres604@gmail.com" target="_blank">
							Enviar un mail
						</a>
					</article>
					<article className="contact__option">
						<AiFillLinkedin className="contact__option-icon" />
						<h4>LinkedIn</h4>
						<h5>andres-jimenez-developer</h5>
						<a
							href="https://www.linkedin.com/in/andr%C3%A9s-jimenez-developer/"
							target="_blank"
						>
							Encuentrame en LinkedIn
						</a>
					</article>
				</div>

				{/* END OF CONTACT OPTIONS*/}
				<form onSubmit={sendEmail} ref={form}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea
						name="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Enviar
					</button>
				</form>
			</GlobalContainer>
		</section>
	);
};

export default Contact;
