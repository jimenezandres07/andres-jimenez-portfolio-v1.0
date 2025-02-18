import React from "react";
import { CTAProjects } from "../../Components/index";

const ProjectCard = ({
	projectName,
	projectImage,
	projectDescription,
	githubLink,
	deployLink,
}) => {
	return (

		<div className="project__card">
			<h2>{projectName}</h2>
			<div className="project__image">
				<img src={projectImage} alt={projectName} />
			</div>
			<h5>{projectDescription}</h5>
			<CTAProjects githubLink={githubLink} deployLink={deployLink} />
		</div>

	);
};

export default ProjectCard;
