import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./Providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <div className="container mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProviders>
  </React.StrictMode>
);
