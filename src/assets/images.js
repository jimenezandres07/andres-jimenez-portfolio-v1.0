import git from "./git.png";
import express from "./express.png";
import javascript from "./javascript.png";
import nodejs from "./nodejs.png";
import postgre from "./postgre.png";
import redux from "./redux.png";
import sequelize from "./sequelize.png";
import react from "./react.png";
import typescript from "./typescript.png";
import dog from "./labrador-8554882_1280.jpg";
import suit from "./pexels-ollivves-1103828.jpg";

export const technologiesArray = [
	{
		name: "Git",
		image: git,
	},
	{
		name: "Express",
		image: express,
	},
	{
		name: "JavaScript",
		image: javascript,
	},
	{
		name: "Node JS",
		image: nodejs,
	},
	{
		name: "PostgreSQL",
		image: postgre,
	},
	{
		name: "Redux",
		image: redux,
	},
	{
		name: "Sequelize",
		image: sequelize,
	},
	{
		name: "React",
		image: react,
	},
	{
		name: "Typescript",
		image: typescript,
	},
];

export const projectsArray = [
	{
		projectName: "The Cutest App",
		projectImage: dog,
		projectDescriptionEng:
			"Dog page where you can find different breeds of dogs, apply different filters to facilitate the search and even create a breed!",
		projectDescriptionEsp:
			"Página de perros dónde se pueden encontrar diferentes razas de perros, aplicar diferentes filtros para facilitar la búsqueda y hasta agregar una raza",
		projectGithubLink:
			"https://github.com/jimenezandres07/PI-Dogs/tree/main/PI-Dogs-main",
		projectDeployLink: "https://dogs-frontend-fawn.vercel.app/",
	},
	{
		projectName: "Sportbase",
		projectImage: suit,
		projectDescriptionEng:
			"Henry's bootcamp group project consisting of a sportswear e-commerce where you can filter by different categories, create a user, add to the shopping cart, check out with Mercado Pago and administrator panel",
		projectGithubLink: "https://github.com/jmarce99/Sportbase-Front",
		projectDescriptionEsp:
			"Proyecto grupal del bootcamp Henry que consiste en un e-commerce de ropa deportiva donde puedes filtrar por diferentes categorías, crear un usuario, agregar al carrito de compras, pagar con Mercado Pago y panel de administrador",
		projectGithubLink: "https://github.com/jmarce99/Sportbase-Front",
		projectDeployLink: "https://sportbase.vercel.app/",
	},
];
