import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const GrowthLanding = lazy(() => import("./pages/GrowthLanding"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/growth" element={<GrowthLanding />} />
            <Route path="/reputation" element={<Navigate to="/growth" replace />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;