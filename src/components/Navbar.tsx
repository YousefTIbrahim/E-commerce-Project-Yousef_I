import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <NavbarBS className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/menu" as={NavLink}>
                        Menu
                    </Nav.Link>
                    <Nav.Link to="/cart" as={NavLink}>
                        Cart
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBS>
    )
}