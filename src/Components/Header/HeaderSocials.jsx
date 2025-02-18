import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a href="https://www.linkedin.com/in/andrés-jimenez-developer/" target="_blank" className="icon">
				<BsLinkedin />
			</a>
			<a href="https://github.com" target="_blank" className="icon">
				<FaGithub />
			</a>
		</div>
	);
};

export default HeaderSocials;
