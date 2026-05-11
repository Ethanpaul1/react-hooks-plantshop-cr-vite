/**
 * PlantList Component - Renders a grid of individual plant cards
 * 
 * Displays an unordered list of PlantCard components.
 * Maps over the plants array and creates a card for each plant.
 * 
 * Props:
 * - plants: Array of plant objects to display (filtered by PlantPage)
 * - onToggleStock: Callback function to handle stock toggle from PlantCard
 */

import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants = [], onToggleStock }) {
  return (
    <ul className="cards">
      {/* Map over plants array and render a PlantCard for each plant */}
      {plants.map((plant) => (
        <PlantCard 
          key={plant.id} 
          plant={plant} 
          onToggleStock={onToggleStock} 
        />
      ))}
    </ul>
  );
}

export default PlantList;
