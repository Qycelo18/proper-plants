import Plant from "./Plant";

function Plants({ plants, addToCart }) {
  return (
    <>
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </>
  );
}

export default Plants;
