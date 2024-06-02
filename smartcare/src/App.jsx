import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Spinner from "./components/atoms/Spinner";
import { privateRoute, publicRoutes } from "./routes";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, i) => {
            const Page = route.component ? route.component : <></>;
            return (
              <Route
                key={i}
                path={route.path}
                element={
                  route.path === "/" ? (
                    <Navigate to="/login" replace />
                  ) : (
                    <Page />
                  )
                }
              />
            );
          })}
          {privateRoute.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <React.Suspense fallback={<Spinner />}>
                    <Page />
                  </React.Suspense>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
