import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const Home = lazy(() => import("../src/ui/pages/Home"));
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
