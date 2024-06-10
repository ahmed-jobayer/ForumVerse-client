import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./Providers/AuthProviders";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProviders>
          <div className="container mx-auto">
            <RouterProvider router={router} />
          </div>
        </AuthProviders>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
