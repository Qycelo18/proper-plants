import { useState } from "react";
import "./index.css";
import Plant from "./components/Plant";
import Plants from "./components/Plants";
import Cart from "./components/Cart";
import PLANTS from "./data";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (plant) => {
    const cartItemExists = cartItems.find((i) => i.id === plant.id);
    if (cartItemExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      const cartItem = { ...plant, quantity: 1 };
      setCartItems([...cartItems, cartItem]);
    }
  };

  const removePlant = (plantToRemove) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === plantToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const addPlant = (plantToAdd) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === plantToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };
  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <section className="plants">
        <Plants plants={PLANTS} addToCart={addToCart} />
      </section>
      <section>
        <Cart items={cartItems} addPlant={addPlant} removePlant={removePlant} />
      </section>
    </>
  );
}
