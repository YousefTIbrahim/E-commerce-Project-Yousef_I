import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

type MenuItemProps = {
    id: number
    name: string
    imageUrl: string
    price: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function MenuItem({ id, name, imageUrl, price }: MenuItemProps) {
    const quantity = 0
    return (
    <Card className= "h-100">
        <Card.Img 
            variant = "top" 
            src={imageUrl} 
            height="200px" 
            style= {{objectFit: "cover"}}
        />
        <Card.Body className = "d-flex flex-column">
            <Card.Title className = "d-flex justify-content-space-between align items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 textmuted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
            {quantity == 0 ? (
                <Button className="w-100">+ Add To Cart</Button>
            ) :  <div 
                    className = "d-flex align-items-center flex-column" 
                    style = {{ gap: ".5rem"}}>
                
                <div 
                    className= "d-flex align-items-center justify-content-center"
                    style = {{ gap: ".5rem"}}>
                 hi
                </div>
                bye
                </div>}
                
            
            </div>
        </Card.Body>
    </Card>
    )
}
