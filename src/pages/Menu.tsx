import menuItems from "../data/menu_test.json"
import { Col, Row } from "react-bootstrap"
import { MenuItem } from "../components/MenuItem"
export function Menu() {
    return ( 
        <>

        <h1>Menu</h1>
        {menuItems.map(category => (
        <div key = {category.id}>
            <h2>{category.title}</h2>
        <Row md={2} xs={1} lg={4} className="g-3">
            {category.items.map(item => (
            <Col key = {item.id}>
               <MenuItem {...item} />
            </Col>
            ))}   
        </Row>
        </div>
        ))}
        </>
    
        )
}