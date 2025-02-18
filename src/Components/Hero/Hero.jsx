import React from "react";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { AboutContainer } from "../../Containers/Containers";
import "./hero.css";
import Me2 from "../../assets/IMG_1466-removebg.png";

const Hero = () => {
	return (
		<section id="about">
			<h5>Una breve</h5>
			<h2>Introducción</h2>
			<AboutContainer className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={Me2} alt="" className="about__me-img" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experiencia</h5>
							<small>+1 Años programando</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Formación</h5>
							<small>Henry Bootcamp</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Proyectos</h5>
							<small>2 Completados</small>
						</article>
					</div>
					<p>
						Soy programador Full-Stack, actualmente resido en Catamarca, Argentina y estoy buscando mí
						primer trabajo en el área de la tecnología. Cuento con formación en Henry Bootcamp dónde
						conocí por primera vez lo que es programar y quedé fascinado con la programación.
						Cuento con aptitudes para resolver problemas, trabajar bajo presión y responder a fechas
						de entrega ajustadas. Si bien el trabajo de programador es un trabajo solitario, me gusta
						trabajar en equipo y estoy abierto a recibir aportes de los integrantes de este.
						Actualmente trabajo de manera colaborativa con una <a href="https://www.linkedin.com/in/claudia-vera-244585b/">traductora profesional</a>  en la traducción,
						edición y corrección de textos relacionados al marketing digital, páginas web y tecnología.
					</p>
					<a href="#contact" className="btn btn-primary">Hablemos!</a>
				</div>
			</AboutContainer>
		</section>
	);
};

export default Hero;
