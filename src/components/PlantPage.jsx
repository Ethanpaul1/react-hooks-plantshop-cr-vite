/**
 * PlantPage Component - Main container managing state and data flow
 * 
 * Responsibilities:
 * - Fetches all plants from the backend on component mount
 * - Manages the plants array and search query state
 * - Handles toggling plant in-stock status
 * - Handles adding new plants from form submissions
 * - Filters plants based on search query (case-insensitive name matching)
 * 
 * Data Flow:
 * PlantPage (state) → NewPlantForm, Search, PlantList (props)
 * PlantList → PlantCard (props)
 * 
 * API Endpoints Used:
 * - GET /plants: Fetch all plants on mount
 * - POST /plants: Create new plant (via NewPlantForm)
 */

import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // State for all plants fetched from backend
  const [plants, setPlants] = useState([]);
  
  // State for search query - used to filter displayed plants
  const [search, setSearch] = useState("");

  /**
   * Effect: Fetch plants from backend on component mount
   * 
   * - Fetches all plants from API (GET /plants)
   * - Normalizes data to ensure all plants have inStock property
   * - If a plant lacks inStock property, it defaults to true
   * - Catches and logs any network errors
   */
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => {
        // Normalize plant data to ensure consistent structure
        const normalized = data.map((p) => ({
          ...p,
          inStock: p.hasOwnProperty("inStock") ? p.inStock : true,
        }));
        setPlants(normalized);
      })
      .catch((err) => console.error("Error fetching plants:", err));
  }, []);

  /**
   * Handler: Add new plant to state
   * 
   * Called after form submission POSTs a new plant to the backend.
   * Appends the new plant to the plants array to update the display.
   * 
   * @param {Object} newPlant - Plant object returned from POST request
   */
  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }

  /**
   * Handler: Toggle plant in-stock status
   * 
   * When user clicks the "In Stock" or "Out of Stock" button on a plant card,
   * this handler inverts the inStock property for that plant.
   * 
   * @param {number} id - The plant ID to toggle
   */
  function handleToggleStock(id) {
    const updated = plants.map((p) =>
      p.id === id ? { ...p, inStock: !p.inStock } : p
    );
    setPlants(updated);
  }

  /**
   * Derived State: Filtered plants list
   * 
   * Filters the plants array based on search query.
   * Uses case-insensitive substring matching on plant names.
   * If search is empty, all plants are displayed.
   */
  const displayedPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      {/* Form to add new plants - POSTs to backend and calls handleAddPlant */}
      <NewPlantForm onAddPlant={handleAddPlant} />
      
      {/* Search input - filters displayed plants by name */}
      <Search search={search} setSearch={setSearch} />
      
      {/* Displays filtered list of plants */}
      <PlantList plants={displayedPlants} onToggleStock={handleToggleStock} />
    </main>
  );
}

export default PlantPage;
