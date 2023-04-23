import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "App";
import constants from 'constants';
import "index.css";

const lifeguard = new Worker(constants.workers.lifeguard);
const router = createBrowserRouter([{
  path: `${constants.routes.root}*`,
  element: <App worker={lifeguard} />
}]);
const app = document.getElementById("app");
const root = createRoot(app);
root.render(
  <RouterProvider router={router} />
);
