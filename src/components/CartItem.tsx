import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import menuItems from "../data/menu_data.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
    ingredients: [{ [key: string]: boolean }];
}

export function CartItem( { id, quantity, ingredients }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const allItems = menuItems.flatMap(category => category.items);
    const item = allItems.find(i => i.id === id);

    if (item == null) return null;
    
console.log('ingredients',ingredients);
// const entries = Object.entries(ingredients);

// Step 2: Filter the entries to include only those where isSelected is true

const selectedEntries = ingredients.filter((item) => item.selected === true);
console.log(selectedEntries);

// Step 3: Map the filtered entries to get an array of names
const selectedNames = selectedEntries.map((item) => item.name);


// console.log(selectedNames); // Output: ["Item 1", "Item 3"]
    return (
        <Stack direction="horizontal" gap={2} className = "d-flex align-items-center">
            <img src={item.imageUrl} style = {{ width: "125px" }} />
            <div className = "me-auto">
                <div>
                    {item.name} {quantity > 1 && <span
                        className="text-muted" style = {{fontSize: ".65rem"}}> x {quantity}
                    </span>
                    }
                </div>
                <div className="text-muted" style = {{fontSize: ".75rem"}}>
                    {selectedNames.join(", ")}

                </div>
                <div className="text-muted" style = {{fontSize: ".75rem"}}>
                    {formatCurrency(item.price)}

                </div>
            </div>
            <div> {formatCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={()=> 
                removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}