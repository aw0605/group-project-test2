import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";
import NotFound from "./pages/not-found/NotFound";
import FeedSlider from "./pages/Feed/FeedSlider";
import Feed from "./pages/Feed/Feed";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/feed" element={<Feed />} />
          {/* <Route path="/" element={<FeedSlider />} /> */}
          <Route path="/loading" element={<Loading />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
