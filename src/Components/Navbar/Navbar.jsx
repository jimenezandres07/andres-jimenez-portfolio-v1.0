import React from "react";
import styled from "styled-components";
import "./navbar.css";
import { useState } from "react";

const NavList = styled.nav`
	position: fixed;
	background: var(--color-bg-variant);
	width: 100%;
	padding: 0.7rem 1.7rem;
	z-index: 2;
	top: 0;
	display: flex;
	flex-direction: row;
	gap: 0.8rem;
	
	@media screen and (max-width: 600px) {
		display: none;
	}
`;

const Navbar = () => {
	const [active, setActive] = useState("#");
	return (
		<NavList>
			<a
				href="#"
				className={active === "#" ? "active" : ""}
				onClick={() => setActive("#")}
			>
				Home
			</a>
			<a
				href="#about"
				onClick={() => setActive("#about")}
				className={active === "#about" ? "active" : ""}
			>
				About
			</a>
			<a
				href="#projects"
				onClick={() => setActive("#projects")}
				className={active === "#projects" ? "active" : ""}
			>
				Projects
			</a>
			<a
				href="#skills"
				onClick={() => setActive("#skills")}
				className={active === "#skills" ? "active" : ""}
			>
				Skills
			</a>
			<a
				href="#contact"
				onClick={() => setActive("#contact")}
				className={active === "#contact" ? "active" : ""}
			>
				Contact
			</a>
		</NavList>
	);
};

export default Navbar;
