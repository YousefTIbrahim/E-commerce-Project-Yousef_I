import menuItems from "../data/menu_data.json"
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
                   <MenuItem 
                                    id={item.id}
                                    name={item.name}
                                    imageUrl={item.imageUrl}
                                    price={item.price}
                                    ingredients={item.ingredients || []} // Ensure ingredients is passed
                                />
                </Col>
            ))}   
        </Row>
    </div>
    ))}
    </>
    
    )
}