import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BeginnerGuide } from "./pages/BeginnerGuide";
import { SignIn } from "./pages/SignIn";
import { Signup } from "./pages/SignUp";
import { Home } from "./pages/Home";
// import data from './data.json';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/form" element={<Form />} />
        <Route path="/beginner-guide" element={<BeginnerGuide />} />
      </Routes>
    </Router>
  );
};

export default App;
