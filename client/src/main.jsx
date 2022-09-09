import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import "../src/styles/index.css";
import "../src/styles/colors.css";
import "../src/styles/font.css";
import "../src/styles/border.css";
import { ProjectTalentProvider } from "./context/ProjectTalentContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
            <ProjectTalentProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
            </ProjectTalentProvider>
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);
