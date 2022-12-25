import React from "react";
import { useRoutes } from "react-router-dom";
import First from "../Firstpage/First";
import Homescreen from "../Home/Homescreen";

const Route = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
        path : "/firstpage",
        element : <First />
    },
     {
        
     }
  ]);

  return element;
};

export default Route;
