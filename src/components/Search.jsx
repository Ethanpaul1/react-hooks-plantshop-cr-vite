/**
 * Search Component - Controlled input for filtering plants by name
 * 
 * Features:
 * - Controlled component: value and onChange are managed by parent (PlantPage)
 * - Real-time filtering: Updates displayed plants as user types
 * - Case-insensitive matching: Works with uppercase/lowercase variations
 * - Clear search: Deleting all text shows all plants again
 * 
 * Props:
 * - search: Current search query string
 * - setSearch: Callback function to update search state in parent
 */

import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="searchbar">
      {/* Label for accessibility */}
      <label htmlFor="search">Search Plants:</label>
      
      {/* Controlled input field */}
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
