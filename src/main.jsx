import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
//BEFORE 18.0.0
// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );
//AFTER
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
