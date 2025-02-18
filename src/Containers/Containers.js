import styled from "styled-components";

export const GlobalContainer = styled.div`
	width: var(--container-width-lg);
	margin: 0 auto;
`;

export const HeaderContainer = styled.div`
	height: 100vh;
	overflow: hidden;
	width: var(--container-width-lg);
	margin: 0 auto;
`;

export const CardsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
`;

export const AboutContainer = styled.div`
	display: grid;
	grid-template-columns: 35% 50%;
	gap: 15%;
`;
