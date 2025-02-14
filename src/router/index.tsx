import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp/index";
import Home from "../pages/Home";
// Lazy load components for code splitting

const SignIn = lazy(() => import("../pages/SignIn/index"));

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      {/* Suspense component for fallback loading indicators */}
      <Suspense
        fallback={
          <div className="w-full flex justify-center text-lg">Loading...</div>
        }
      >
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
