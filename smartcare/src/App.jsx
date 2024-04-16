import { BrowserRouter, Routes, Route } from "react-router-dom";
import { privateRoute, publicRoutes } from "./routes";
import { Suspense } from "react";
import Spinner from "./components/atoms/Spinner";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
          {privateRoute.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Suspense fallback={<Spinner/>}><Page /></Suspense>} />;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
