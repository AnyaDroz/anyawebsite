import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Analogue from "./projects/analogue/Analogue";
import { Analytics } from "@vercel/analytics/react";
import Loupe from "./projects/loupe/Loupe";
import Multi from "./projects/multi-transactions/Multi";
import Echo from "./projects/echo/Echo";
import Access from "./projects/instant-access/Access";
import { AccordionPage } from "./homepage/AccordionPage";

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
        <Route path="/" element={<AccordionPage index={0} />} />
        <Route path="about" element={<AccordionPage index={0} />} />
        <Route path="work" element={<AccordionPage index={1} />} />
        <Route path="contact" element={<AccordionPage index={2} />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
