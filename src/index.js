import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Lyout from "./Lyout";
import Blogs from "./Blogs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" elements={<Lyout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


