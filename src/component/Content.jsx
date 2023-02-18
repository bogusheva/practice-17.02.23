import { Route, Routes } from "react-router-dom";

import Blog from "../pages/Blog";
import Kittens from "../pages/Kittens";
import Home from "../pages/Home";
import DynamicBlock from "./DynamicBlock";

export default function Content({ data }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/kittens" element={<Kittens data={data} />} />
        <Route
          path="/kittens/:catName"
          element={<DynamicBlock data={data} />}
        />
      </Routes>
    </>
  );
}
