import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Analogue from "./projects/analogue/Analogue";
import { Analytics } from "@vercel/analytics/react";
import Loupe from "./projects/loupe/Loupe";
import Multi from "./projects/multi-transactions/Multi";
import Echo from "./projects/echo/Echo";
import Access from "./projects/instant-access/Access";
import Home from "./homepage/Home";

function App() {
  // const location = useLocation();
  return (
    <div>
      <Routes>
        <Route path="/analogue" index element={<Analogue />} />
        <Route path="/multi-transactions" index element={<Multi />} />
        <Route path="/loupe" index element={<Loupe />} />
        <Route path="/echo" index element={<Echo />} />
        <Route path="/access" index element={<Access />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
