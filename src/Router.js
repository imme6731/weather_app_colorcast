import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Air } from "./pages/air/Air";
import { Wind } from "./pages/wind/Wind";
import { Humidity } from "./pages/humidity/Humidity";
import { PageNotFound } from "./pages/pagenotfound/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/air" element={<Air />} />
        <Route path="/wind" element={<Wind />} />
        <Route path="/humidity" element={<Humidity />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
