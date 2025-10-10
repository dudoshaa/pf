import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Home, Skills, Projects } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/skills", element: <Skills /> },
        { path: "/projects", element: <Projects /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
