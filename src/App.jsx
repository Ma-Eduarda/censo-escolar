import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Instituicoes from "./Pages/Instituicoes.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Instituicoes" element={<Instituicoes />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
