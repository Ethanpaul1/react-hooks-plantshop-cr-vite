// PlantList: renders a list of PlantCard components
import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants = [], onToggleStock }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onToggleStock={onToggleStock} />
      ))}
    </ul>
  );
}

export default PlantList;
