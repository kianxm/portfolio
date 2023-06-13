import React, { Suspense } from "react";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  );
}

export default App;
