import { createBrowserRouter } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Work from "../Components/Work";
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
        path: "work",
        element: <Work />,
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
