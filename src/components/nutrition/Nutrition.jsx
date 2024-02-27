import Title from "../commons/Title";

function Nutrition() {
  const nutritionElements = [
    {
      name: "Calories",
      value: "277kcal",
    },
    {
      name: "Carbs",
      value: "0g",
    },
    {
      name: "Protein",
      value: "20g",
    },
    {
      name: "Fat",
      value: "22g",
    },
  ];
  return (
    <>
      <Title titre="Nutrition" />
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      {nutritionElements.map((element) => (
        <div key={element.name}>
          <span style={{ fontWeight: "bolder" }}>{element.name}</span>
          <span>: {element.value}</span>
        </div>
      ))}
    </>
  );
}

export default Nutrition;
