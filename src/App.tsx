//import './App.css'
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Navbar } from "./components/Navbar";
import { Welcome } from "./pages/Welcome";
import { Menu } from "./pages/Menu";
import { Cart } from "./pages/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";




function App() {

  return (
  <ShoppingCartProvider>
    <Navbar />
    <Container className="mb-4">
         <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
    </Container>
  </ShoppingCartProvider>
  )
}

export default App
