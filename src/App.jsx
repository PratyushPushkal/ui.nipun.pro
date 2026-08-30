import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UnderDevelopment from "./pages/UnderDevelopment";
import ReputationLanding from "./pages/ReputationLanding";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reputation" element={<ReputationLanding />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="*" element={<UnderDevelopment />} />
      </Routes>
    </Router>
  );
}

export default App;