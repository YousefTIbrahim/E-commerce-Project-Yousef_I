import { Stack, Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import menuItems from "../data/menu_data.json"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart( {isOpen} : ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()

    const getIngredients = (id: number) => {
        const allItems = menuItems.flatMap(category => category.items);
        const item = allItems.find(i => i.id === id);
        if (!item) return {};
        return item.ingredients.reduce((acc: { [key: string]: boolean }, ingredient: { name: string; selected: boolean }) => {
            acc[ingredient.name] = ingredient.selected;
            return acc;
        }, {});
    };
    return ( 
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
           <Offcanvas.Title>Cart</Offcanvas.Title> 
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3} >
                {cartItems.map(item => (
                    <CartItem ingredients={getIngredients(item.id)} key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((total,cartItem)=> {
                        const allItems = menuItems.flatMap(category => category.items)
                        const item = allItems.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0)* cartItem.quantity
                    }, 0))}
                    </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
    )
}