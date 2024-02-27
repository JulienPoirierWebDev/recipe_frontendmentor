import Title from "./components/commons/Title";
import Ingredients from "./components/ingredients/Ingredients";
import Instructions from "./components/instructions/Instructions";
import Nutrition from "./components/nutrition/Nutrition";
import Preparation from "./components/preparation/Preparation";

const Recipe = () => {
  return (
    <>
      <h1>Simple Omelette Recipe</h1>

      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>

      <Preparation />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </>
  );
};
function App() {
  return (
    <>
      <Recipe />
    </>
  );
}

export default App;
