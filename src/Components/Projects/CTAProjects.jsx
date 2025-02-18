import React from "react";

const CTAProjects = ({githubLink, deployLink}) => {
	return (
		<div className="cta">
			<a href={githubLink} className="btn">
				Github
			</a>
			<a href={deployLink} className="btn btn-primary">
				Echar un vistazo
			</a>
		</div>
	);
};

export default CTAProjects;
