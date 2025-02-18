import React from "react";
import { technologiesArray } from "../../assets/images";
import SkillsCard from "./SkillsCard";
import { CardsContainer } from "../../Containers/Containers";
import "./skills.css";

const Skills = () => {
	return (
		<section id="skills">
			<h2>Tecnologías</h2>
			<CardsContainer className="skills__container">
				{technologiesArray.map((technologies) => (
					<SkillsCard name={technologies.name} image={technologies.image} />
				))}
			</CardsContainer>
		</section>
	);
};

export default Skills;
