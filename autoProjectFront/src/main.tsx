import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import "./global/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
 