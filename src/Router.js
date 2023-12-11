import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Air } from "./pages/air/Air";
import { Wind } from "./pages/wind/Wind";
import { Humidity } from "./pages/humidity/Humidity";
import { PageNotFound } from "./pages/pagenotfound/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Router = () => {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/air" element={<Air />} />
        <Route path="/wind" element={<Wind />} />
        <Route path="/humidity" element={<Humidity />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
};

export default Router;
