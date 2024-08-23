import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router";
import Topbar from "./components/topbar/topbar";

export default function App() {

  let router = useRoutes(routes)

  return (
    <>
     <Topbar/>
      {router}
    </>
  );
}


