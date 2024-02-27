import Title from "../commons/Title";

function Ingredients() {
  const ingredients = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ];
  return (
    <>
      <Title titre="Ingredients" />

      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </>
  );
}

export default Ingredients;
