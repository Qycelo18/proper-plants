function Cart({ items, addPlant, removePlant }) {
  return (
    <>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id} className="cart-item">
                  {item.image}
                  <p>{item.name}</p>
                  <br />
                  <button onClick={() => removePlant(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addPlant(item)}>+</button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default Cart;
