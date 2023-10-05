
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './componentes/CartContainer/CartContainer';
import Home from "./componentes/CoverComponents/Home";
import {GenerateOrder} from "./componentes/CartContainer/GenerateOrder";
import { CartContextProvider } from "./componentes/context/CartContext";

import './App.css';

function App() {

  return (
    <>

      <Router>

        <CartContextProvider>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaid" element={< ItemListContainer />} />

            <Route path="/detalle/:productoid" element={< ItemDetailContainer />} />
            <Route path="/cart" element={< CartContainer />} />
            <Route path="/order" element={< GenerateOrder />} />
          </Routes>

        </CartContextProvider>

        < Footer />

      </Router>

    </>
  )
}

export default App