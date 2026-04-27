function Plant({ plant, addToCart }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      <br />
      <b>{plant.name}</b>
      <br />
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </li>
  );
}

export default Plant;
