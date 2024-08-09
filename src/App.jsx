import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "react-router-dom";

import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header/header";
import Home from "./components/home/home";
import { AuthProvider } from "./Contexts/AuthContext/index";

function AppRoutes() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  return useRoutes(routesArray);
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <div className="w-full h-screen flex flex-col">
          <AppRoutes />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;