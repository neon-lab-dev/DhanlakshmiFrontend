import React, { Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from '.';

// COMPONENT
import Layout from '../components/Layout';

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
                <Suspense fallback={<p>Loading...</p>}>
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
