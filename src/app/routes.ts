import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Ministerios from "./pages/Ministerios";
import Agenda from "./pages/Agenda";
import Galeria from "./pages/Galeria";
import PedidoOracao from "./pages/PedidoOracao";
import Contato from "./pages/Contato";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "quem-somos", Component: QuemSomos },
      { path: "ministerios", Component: Ministerios },
      { path: "agenda", Component: Agenda },
      { path: "galeria", Component: Galeria },
      { path: "pedido-oracao", Component: PedidoOracao },
      { path: "contato", Component: Contato },
      { path: "admin", Component: Admin },
      { path: "*", Component: NotFound },
    ],
  },
]);
