import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  const routes = ["/", "/pdl-projects"];

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to homepage if invalid url
    if (!routes.includes(pathname)) {
      navigate("/");
    }

    // Scroll to the top when a new page loads
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdl-projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
