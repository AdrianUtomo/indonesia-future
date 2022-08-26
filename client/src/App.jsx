import { Routes, Route } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { BrowseTalents } from "./pages/BrowseTalents";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Join } from "./pages/Join";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-talents" element={<BrowseTalents />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<Join/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
