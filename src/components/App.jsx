import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

/**
 * App Component - Root component of the Plantsy application
 * 
 * Serves as the main entry point for the application.
 * Renders the Header (branding) and PlantPage (main content area with all features).
 * 
 * Features provided by child components:
 * - View all plants fetched from the backend
 * - Add new plants via form submission
 * - Toggle in-stock/out-of-stock status
 * - Search and filter plants by name
 */
function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
