import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router";

export default function App() {

  let router = useRoutes(routes)

  return (
    <>
      {router}
    </>
  );
}


