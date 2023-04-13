import { createRoot } from "react-dom/client";
import App from "App";
import constants from 'constants';
import "index.css";

const lifeguard = new Worker(constants.workers.lifeguard);
const app = document.getElementById("app");
const root = createRoot(app);
root.render(<App worker={lifeguard} />);
