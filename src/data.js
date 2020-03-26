const animals = [
  { name: "cat", sound: "meow", foodRequirements: { food: 2, water: 3 } },
  { name: "dog", sound: "woof" }
];

function useAnimals(animal) {
  return [
    animal.name,
    function makeSound() {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { useAnimals };
