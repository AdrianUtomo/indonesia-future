import { Routes, Route } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { BrowseTalents } from "./pages/BrowseTalents";
import { BrowseProjects } from "./pages/BrowseProjects";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Join } from "./pages/Join";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import { EmailVerification } from "./pages/EmailVerification";
import { Category } from "./pages/BrowseTalents/Category";
import { NotFound } from "./pages/404NotFound";
import { Talents } from "./pages/BrowseTalents/Talent";
import { SearchPage } from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-talents" element={<BrowseTalents />} />
        <Route path="/browse-talents/category" element={<Category />} />
        <Route path="/browse-talents/category/:talent" element={<Talents />} />
        <Route path="/browse-projects" element={<BrowseProjects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Join />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
