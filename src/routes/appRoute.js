import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Home from "../pages";
import { QueryClient, QueryClientProvider } from "react-query";

const AppRoute = () => {
  const queryClient = new QueryClient();
  return ( 
    render (
      <BrowserRouter>
        <QueryClientProvider client={queryClient} contextSharing={true}>
            <Routes>
              <Route index path="/" element={<Home />} />
            </Routes>
        </QueryClientProvider>
        </BrowserRouter>,
      document.getElementById("root")
    )
  )
};

export default AppRoute;
