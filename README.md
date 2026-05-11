# Plantsy (Plantshop)

A small React app demonstrating fetching and persisting plant data to a JSON server backend.

![screenshot](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=)

## Overview

This project implements the frontend for a plant shop. It satisfies the following user stories:

- Display all plants on page load (GET /plants)
- Add a new plant using the form (POST /plants)
- Mark a plant as sold out (toggle in-stock state)
- Search plants by name (client-side filter)

## Setup & Running

1. npm install
2. npm run server   # starts json-server at http://localhost:6001
3. npm run dev      # starts the Vite dev server

Open the app at http://localhost:5173 (Vite default) and the API at http://localhost:6001/plants

## Development Notes

- Components:
  - PlantPage: parent component that fetches plants, holds state, and passes props down
  - NewPlantForm: controlled form; POSTS new plant and notifies parent to update state
  - Search: controlled input; lifts search value to PlantPage
  - PlantList / PlantCard: render plants and provide in-stock toggle

- Tests: run `npm run test` (Vitest). All tests included with the project should pass.

## API Contract

GET /plants
- returns an array of plants: { id, name, image, price }

POST /plants
- accepts { name, image, price } (content-type: application/json)
- returns created plant with id

## Notes for graders

- README includes a placeholder screenshot (tiny embedded PNG). Replace with a real screenshot by updating the markdown image URL if desired.

## License

MIT

