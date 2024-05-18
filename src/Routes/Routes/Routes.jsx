import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Homepage/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import Signin from "../../Pages/UserHandle/Signin/Signin";
import Signup from "../../Pages/UserHandle/Signup/Signup";
import BookCollection from "../../Pages/Books/BookCollection/BookCollection";
import Developers from "../../Pages/Developers/Developers";
import SingleBooks from "../../Pages/Books/SingleBook/SingleBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <BookCollection />,
      },
      {
        path: `/book/:ISBN`,
        element: <SingleBooks />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/developers",
        element: <Developers />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
