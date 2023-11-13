import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";
import NotFound from "./pages/not-found/NotFound";
import Feed from "./pages/Feed/Feed";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/loading" element={<Loading />} />

          <Route path="/feed" element={<Feed />} />
          <Route path="/feed/:userId" element={<Feed />} />
          <Route path="/feed/hashtags/:tag" element={<Feed />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
