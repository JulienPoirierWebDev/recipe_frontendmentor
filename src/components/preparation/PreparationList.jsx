import PreparationListItem from "./PreparationListItem";

function PreparationList() {
  const itemsToDisplay = [
    {
      bold: "Total:",
      normal: "Approximately 10 minutes",
    },
    {
      bold: "Preparation:",
      normal: "5 minutes",
    },
    {
      bold: "Cooking:",
      normal: "5 minutes",
    },
  ];

  return (
    <ul>
      {itemsToDisplay.map((oneItemToDisplay) => (
        <PreparationListItem
          key={oneItemToDisplay.bold}
          bold={oneItemToDisplay.bold}
          normal={oneItemToDisplay.normal}
        />
      ))}
    </ul>
  );
}

export default PreparationList;
