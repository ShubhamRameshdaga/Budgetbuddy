//jshint esversion:9
import "./App.css";
import React, { useState } from "react";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./Components/Navbar";
const App = () => {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                pageSize={5}
                setProgress={setProgress}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={5}
                setProgress={setProgress}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={5}
                setProgress={setProgress}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pageSize={5}
                setProgress={setProgress}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pageSize={5}
                setProgress={setProgress}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={5}
                setProgress={setProgress}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={5}
                setProgress={setProgress}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={5}
                setProgress={setProgress}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
