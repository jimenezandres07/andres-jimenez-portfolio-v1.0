import React from "react";
import { CTA, HeaderSocials } from "../index";
import Me from "../../assets/ANDY-ROJO-IZQUIERDA.jpg";
import "./header.css";

import { HeaderContainer } from "../../Containers/Containers";

const Header = () => {
	return (
		<header>
			<HeaderContainer className="container header__container">
				<h2 className="name">Andres Jimenez</h2>
				<h5 className="text-light description">Front End Developer Argentino</h5>
				<CTA />
				<HeaderSocials />
			</HeaderContainer>
			<div class="demo" data-text="AJ">
				<div class="demo__text">AJ</div>
				{/* <a href="#about" className="scroll__down">
					Deslizar para abajo
					</a> */}
			</div>
		</header>
	);
};

export default Header;
