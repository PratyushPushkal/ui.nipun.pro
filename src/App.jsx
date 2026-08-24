import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UnderDevelopment from "./pages/UnderDevelopment";
import ReputationLanding from "./pages/ReputationLanding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reputation" element={<ReputationLanding />} />
        <Route path="*" element={<UnderDevelopment />} />
      </Routes>
    </Router>
  );
}

export default App;