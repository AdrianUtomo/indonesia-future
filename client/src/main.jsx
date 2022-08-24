import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import "../src/styles/index.css"
import "../src/styles/colors.css"
import "../src/styles/font.css";
import "../src/styles/border.css";
import { Login } from "./layout/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
