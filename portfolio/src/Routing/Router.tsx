import { createBrowserRouter } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Resume from "../Components/Resume";
import Services from "../Components/Services";
import Skills from "../Components/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,  
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
    ],
  },
]);
