//import './App.css'
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Cart } from "./pages/Cart";




function App() {

  return <Container className="mb-4">
    <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
    </div>
  </Container>
}

export default App
