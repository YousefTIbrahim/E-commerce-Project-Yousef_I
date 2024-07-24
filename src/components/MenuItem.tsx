import { Button, Card, Row, Col } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";

type Ingredient = {
    name: string;
    selected: boolean;
};

type MenuItemProps = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    ingredients: Ingredient[];
};

export function MenuItem({ id, name, imageUrl, price, ingredients }: MenuItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, editItem } = useShoppingCart();
    const quantity = getItemQuantity(id);

    const [isEditing, setIsEditing] = useState(false);
    const [selectedIngredients, setSelectedIngredients] = useState<{ [key: string]: boolean }>(
        ingredients.reduce((acc, ingredient) => {
            acc[ingredient.name] = ingredient.selected;
            return acc;
        }, {} as { [key: string]: boolean })
    );

    const handleIngredientClick = (name: string) => {
        setSelectedIngredients(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    const handleSaveChanges = () => {
        const updatedIngredients = Object.entries(selectedIngredients).map(([name, selected]) => ({
            name,
            selected
        }));
        editItem(id, updatedIngredients);
        setIsEditing(false);
    };

    const handleEditButtonClick = () => {
        setIsEditing(true);
    };

    return (
        <Card className="h-100">
            <Card.Img 
                variant="top" 
                src={imageUrl} 
                height="200px" 
                style={{ objectFit: "cover" }} 
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
                    ) : (
                        <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                            {isEditing ? (
                                <>
                                    <Row className="mb-3">
                                        {Object.keys(selectedIngredients).map(ingredient => (
                                            <Col key={ingredient} className="mb-2">
                                                <Button
                                                    variant={selectedIngredients[ingredient] ? "success" : "secondary"}
                                                    onClick={() => handleIngredientClick(ingredient)}
                                                    className="w-100"
                                                >
                                                    {ingredient}
                                                </Button>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Button onClick={handleSaveChanges} variant="primary" className="w-100 mb-2">Save Changes</Button>
                                    <Button onClick={() => setIsEditing(false)} variant="secondary" className="w-100">Cancel</Button>
                                </>
                            ) : (
                                <>
                                    <Button onClick={handleEditButtonClick}>Edit Item</Button>
                                    <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                        <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                        <div>
                                            <span className="fs-3">{quantity}</span> in cart
                                        </div>
                                        <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                                    </div>
                                    <Button onClick={() => removeFromCart(id)}>Remove</Button>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}
