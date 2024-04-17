import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from ".";

// COMPONENT
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

const RoutesContainer = () => {
  return (
    <Router>
      <Routes>
        {ROUTES.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Suspense
                  fallback={
                    <div className="h-screen w-screen flex items-center justify-center">
                      <Spinner className="h-8 w-8" />
                    </div>
                  }
                >
                  <route.component />
                </Suspense>
              </Layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default RoutesContainer;
