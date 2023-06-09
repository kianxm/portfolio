import React, { Suspense } from "react";
import Loader from "./components/Loader";
import PortfolioImages from "./pages/PortfolioImages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolio/:name" element={<PortfolioImages />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
