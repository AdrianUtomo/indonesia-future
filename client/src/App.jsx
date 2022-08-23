import { Routes, Route } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { BrowseTalents } from "./pages/BrowseTalents";
import { Home } from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-talents" element={<BrowseTalents />} />
      </Routes>
    </div>
  );
}

export default App;
