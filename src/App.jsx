import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import All from "./pages/All";
import FullStack from "./pages/FullStack";
import Career from "./pages/Career";
import CyberSecurity from "./pages/CyberSecurity";
import DataScience from "./pages/DataScience";
import "./App.css";
import { data } from "./components/Data";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <All data={data} />,
      },
      {
        path: "/all",
        element: <All data={data} />,
      },
      {
        path: "/fullstack",
        element: <FullStack data={data} />,
      },
      {
        path: "/datascience",
        element: <DataScience data={data} />,
      },
      {
        path: "/cyber",
        element: <CyberSecurity data={data} />,
      },
      {
        path: "/career",
        element: <Career data={data} />,
      },
    ],
  },
]);
const App = () => {
  data.map((element) => {
    console.log(element);
  });

  return <RouterProvider router={router} />;
};

export default App;
