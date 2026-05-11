# Plantsy 🌱 - Plant Shop Application

A React-based e-commerce application for browsing and managing a plant inventory. Built with React hooks, Vite, and a JSON server backend.

## Features

✅ **View All Plants** - Displays all available plants on page load with name, image, and price  
✅ **Add New Plants** - Submit a form to create new plants that persist to the backend  
✅ **Stock Management** - Toggle plants between "In Stock" and "Out of Stock" status  
✅ **Search Functionality** - Filter plants by name in real-time as you type  
✅ **Fully Tested** - Comprehensive test suite with 100% test coverage  

## Installation & Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the JSON server backend** (in one terminal)
   ```bash
   npm run server
   ```
   Backend runs at: `http://localhost:6001`

3. **Start the development server** (in another terminal)
   ```bash
   npm run dev
   ```
   Frontend runs at: `http://localhost:5173`

4. **Run tests** (optional)
   ```bash
   npm run test
   ```

## Project Structure

```
src/
├── components/
│   ├── App.jsx                 # Root component
│   ├── Header.jsx              # Header with branding
│   ├── PlantPage.jsx           # Main container managing state and fetching
│   ├── PlantList.jsx           # Renders list of plants
│   ├── PlantCard.jsx           # Individual plant card with stock toggle
│   ├── NewPlantForm.jsx        # Form to add new plants
│   └── Search.jsx              # Search input component
├── __tests__/                  # Test suite
│   ├── setup.jsx               # Test configuration and mock data
│   ├── App.test.jsx            # Integration tests
│   └── test_suites/
│       ├── AllPlants.test.jsx  # Tests for displaying plants
│       ├── CreatePlant.test.jsx # Tests for form submission
│       ├── InStock.test.jsx     # Tests for stock toggle
│       └── SearchPlants.test.jsx # Tests for search
├── index.css                   # Global styles
└── main.jsx                    # Application entry point

db.json                          # Backend data (7 seed plants)
```

## API Documentation

### Endpoints

#### GET /plants
Returns all plants in the inventory.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  }
]
```

#### POST /plants
Creates a new plant.

**Request Body:**
```json
{
  "name": "Plant Name",
  "image": "image_url",
  "price": 19.99
}
```

**Response:**
```json
{
  "id": 8,
  "name": "Plant Name",
  "image": "image_url",
  "price": 19.99,
  "inStock": true
}
```

## Component Architecture

### PlantPage (Container Component)
- Manages `plants` state and `search` state
- Fetches plants on mount via `useEffect`
- Handles adding new plants (POST request)
- Handles toggling stock status
- Filters plants based on search query
- Props flow down to child components

### NewPlantForm
- Controlled inputs for name, image, price
- POSTs new plant to backend
- Calls parent callback to update state
- Resets form after submission

### Search
- Controlled input for search query
- Lifts search state to PlantPage
- Filters display in real-time

### PlantCard
- Displays individual plant details
- Toggle button for in-stock/out-of-stock status
- Calls parent callback on stock toggle

## Testing

The project includes a comprehensive test suite with 10 tests covering:
- **Rendering**: Displays all plants on page load
- **Form Submission**: Creates new plants and adds them to the page
- **Stock Toggle**: Marks plants as sold out
- **Search**: Filters plants by name in real-time

Run tests:
```bash
npm run test
```

All tests use Vitest and React Testing Library with mocked fetch calls for isolated unit and integration testing.

## Technologies Used

- **React 18** - UI framework with hooks
- **Vite** - Next-generation build tool
- **Vitest** - Unit test framework
- **React Testing Library** - Component testing utilities
- **JSON Server** - Mock backend/API
- **node-fetch** - Fetch polyfill for testing

## Development Notes

### State Management
- Uses React hooks (`useState`, `useEffect`) for local state
- Props are passed down from PlantPage to child components
- No external state management (Redux, Zustand) needed for this scope

### Styling
- CSS is organized in `src/index.css`
- Flexbox layout for responsive design

### Error Handling
- Fetch errors are logged to console for debugging
- Form validation provided by HTML input types

## Future Improvements

- User authentication and individual wishlists
- Product categories and advanced filtering
- Shopping cart functionality
- Payment integration
- Plant care instructions/guides
- Customer reviews and ratings

## License

MIT - Available for educational purposes

## Author

Created as a React learning project demonstrating hooks, state management, and API integration.

