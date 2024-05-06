import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio/Index";
import SobreMim from "./paginas/SobreMim/Index";
import Menu from "./componentes/Menu/Index";
import Rodape from "componentes/Rodape/Index";
import PaginaPadrao from "componentes/PaginaPadrao/Index";
import Post from "paginas/Post/Index";
import NaoEncontrada from "paginas/NaoEncontrada/Index";
import ScrollToTop from "componentes/ScrollToTop/Index";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
