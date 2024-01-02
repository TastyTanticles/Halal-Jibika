import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "../Pages/Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import SignIn from "./SignIn/SignIn";
import NotFound from "./NotFound/NotFound";
import SignUp from "./SignUp/SignUp";
import Jobs from "./Jobs/Jobs";
import Favorite from "./Favorite/Favorite";
import AddJobs from "./AddJobs/AddJobs";
import Applied from "./Applied/Applied";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/addjobs",
        element: <AddJobs />,
      },
      {
        path: "/applied",
        element: <Applied />,
      },
    
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
