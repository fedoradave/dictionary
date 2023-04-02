import { createRoot } from "react-dom/client";
import App from "App";
import "index.css";

const worker = new Worker('/worker.js');
const app = document.getElementById("app");
const root = createRoot(app);
root.render(<App worker={worker} />);
