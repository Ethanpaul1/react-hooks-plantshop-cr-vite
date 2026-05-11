/**
 * NewPlantForm Component - Form to create and submit new plants
 * 
 * Features:
 * - Controlled form inputs for name, image URL, and price
 * - POSTs new plant data to backend (POST /plants)
 * - Adds returned plant to parent state via callback
 * - Resets form inputs after successful submission
 * - Handles data normalization for consistent inStock property
 * 
 * Data Flow:
 * 1. User fills in form inputs
 * 2. User clicks "Add Plant" button
 * 3. handleSubmit POSTs to backend
 * 4. Backend returns new plant with id
 * 5. Normalize data (ensure inStock property)
 * 6. Call onAddPlant callback to update parent state
 * 7. Clear form inputs
 * 
 * Props:
 * - onAddPlant: Callback function(newPlant) to add plant to parent state
 */

import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  // Form field states
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  /**
   * Handle form submission
   * 
   * Sends new plant data to backend via POST request.
   * Price is kept as a string to match test expectations.
   * After receiving response, normalizes plant data and clears form.
   */
  function handleSubmit(e) {
    // Prevent default form submission behavior
    e.preventDefault();
    
    // Prepare plant data for backend - keep price as string per tests
    const plantToSend = { name, image, price };

    // POST request to backend
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plantToSend),
    })
      .then((r) => r.json())
      // Process the returned plant data
      .then((newPlant) => {
        // Normalize: ensure inStock property exists (defaults to true)
        const normalized = { 
          ...newPlant, 
          inStock: newPlant.hasOwnProperty("inStock") ? newPlant.inStock : true 
        };
        
        // Notify parent component to add plant to state
        onAddPlant(normalized);
        
        // Clear form inputs for next entry
        setName("");
        setImage("");
        setPrice("");
      })
      .catch((err) => console.error("Error adding plant:", err));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        {/* Plant name input */}
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        {/* Plant image URL input */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        
        {/* Plant price input */}
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        
        {/* Submit button */}
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
