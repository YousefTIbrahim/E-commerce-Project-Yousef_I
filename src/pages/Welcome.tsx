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
                <img src="https://images.ctfassets.net/l5fkpck1mwg3/4W0dVj068ffu9aAm6MlglC/a3458aea07179527cb1c2f0216e65599/DEL2022-648012_AllAmericanBurger_Fries_PepsiGlass_Silo_4000x3000.png" className ="card-img-top"/>

                <Card.Text>Burgers, Sandwiches, Wings and all the Sides! </Card.Text>
                 <a href="./menu" className="btn btn-primary">Go To Menu</a>
        </Card.Body>
  </Card>
</Col>
<Col>
<Card>
          <Card.Body>
                <h3 className="card-title">PROMO CODES</h3>
                <img src="https://images.ctfassets.net/l5fkpck1mwg3/7aYt4UJZs7ENrgC7NGDKF4/f6276a9d65ea4dab1e75edc8596bfa50/Party_Menu_Boneless_50_Count.png" className = "card-img-top"/>
                <Card.Text>Use Code: YUMMY at checkout for 1MIL Boneless Wings! </Card.Text>
                 <a href="./checkout" className="btn btn-primary">Use Code</a>
        </Card.Body>
  </Card>
</Col>
</Row>
<div className="bg-warning">
<h2>Menu Options</h2>
</div>
<Row md={3} className="g-3">
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