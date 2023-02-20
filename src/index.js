import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/blogs";
import Home from "./pages/home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
    </Routes>
  </BrowserRouter>
);
