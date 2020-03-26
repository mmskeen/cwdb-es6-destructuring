// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals, { useAnimals } from "./data";

// practice destructuring on animal data:
const [cat, dog] = animals;

console.log(cat);

const {
  name = "Fluffy",
  sound = "Purr",
  foodRequirements: { food, water }
} = cat;
console.log(name, sound, food, water);

console.log(useAnimals(cat));
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

// practice destructuring car data

const [honda, tesla] = cars;
const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
