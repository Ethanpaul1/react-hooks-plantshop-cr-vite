// PlantPage: manages plants state, fetches data, and wires child components
import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => {
        const normalized = data.map((p) => ({
          ...p,
          inStock: p.hasOwnProperty("inStock") ? p.inStock : true,
        }));
        setPlants(normalized);
      })
      .catch((err) => console.error("Error fetching plants:", err));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }

  function handleToggleStock(id) {
    const updated = plants.map((p) =>
      p.id === id ? { ...p, inStock: !p.inStock } : p
    );
    setPlants(updated);
  }

  const displayedPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={displayedPlants} onToggleStock={handleToggleStock} />
    </main>
  );
}

export default PlantPage;
