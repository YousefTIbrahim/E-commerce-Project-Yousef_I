import { Card, Row, Col } from "react-bootstrap"
import menuItems from "../data/menu_data.json"

export function Welcome() {
    return ( 
    <>
    <h1>Welcome</h1>
    <Row md={2} className="g-3">
<Col>
    <Card>
          <Card.Body>
                <h3 className="card-title">COMBOS TO TRY</h3>
            
                <Card.Text>Burgers, Sandwiches, Wings and all the Sides! </Card.Text>
                 <a href="./menu" className="btn btn-primary">Go To Menu</a>
        </Card.Body>
  </Card>
</Col>
<Col>
<Card>
          <Card.Body>
                <h3 className="card-title">PROMO CODES</h3>
            
                <Card.Text>Use Code: YUMMY at checkout for 6 Boneless Wings! </Card.Text>
                 <a href="./checkout" className="btn btn-primary">Boom</a>
        </Card.Body>
  </Card>
</Col>

{menuItems.map(category => (
        <Col key = {category.id}>
            <Card>
            <h3>{category.title}</h3>
            </Card>
            </Col>
    ))}
    </Row>
    
    </>
 
)
    
}