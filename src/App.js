import React, { Suspense, useState } from "react";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader onLoadingComplete={handleLoadingComplete} />
      ) : (
        <Suspense
          fallback={<Loader onLoadingComplete={handleLoadingComplete} />}
        >
          <Home />
        </Suspense>
      )}
    </>
  );
}

export default App;
