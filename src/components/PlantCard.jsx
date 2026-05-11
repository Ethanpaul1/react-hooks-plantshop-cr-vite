/**
 * PlantCard Component - Displays a single plant with details and stock status
 * 
 * Renders:
 * - Plant image
 * - Plant name
 * - Plant price
 * - Toggle button for in-stock/out-of-stock status
 * 
 * The button:
 * - Shows "In Stock" (primary style) if plant.inStock is true
 * - Shows "Out of Stock" (secondary style) if plant.inStock is false
 * - Clicking invokes the onToggleStock callback to update parent state
 * 
 * Props:
 * - plant: Object containing { id, name, image, price, inStock }
 * - onToggleStock: Callback function(plantId) to toggle stock status
 */

import React from "react";

function PlantCard({ plant, onToggleStock }) {
  return (
    <li className="card" data-testid="plant-item">
      {/* Plant image */}
      <img src={plant.image} alt={plant.name} />
      
      {/* Plant name */}
      <h4>{plant.name}</h4>
      
      {/* Plant price */}
      <p>Price: {plant.price}</p>
      
      {/* Stock toggle button - conditional rendering based on inStock status */}
      {plant.inStock ? (
        // If in stock, show "In Stock" button with primary styling
        <button className="primary" onClick={() => onToggleStock(plant.id)}>
          In Stock
        </button>
      ) : (
        // If out of stock, show "Out of Stock" button with secondary styling
        <button onClick={() => onToggleStock(plant.id)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
