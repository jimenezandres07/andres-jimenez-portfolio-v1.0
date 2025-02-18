import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">
				{" "}
				ANDRES JIMENEZ{" "}
			</a>

			<ul className="permalinks">
				<a href="#">Home</a>
				<a href="#about">About me</a>
				<a href="#projects">Projects</a>
				<a href="#skills">Skills</a>
				<a href="#contact">Contact Me</a>
			</ul>

			<div className="footer__socials">
				<a href="https://www.linkedin.com/in/andr%C3%A9s-jimenez-developer/">
					<AiFillLinkedin />
				</a>
				<a href="https://github.com/jimenezandres07">
					<FaGithubSquare />
				</a>
				<a href="https://www.instagram.com/andrxsjimenez_/">
					<FaInstagram />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
