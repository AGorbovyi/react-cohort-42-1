// TASK 1:
// У вас есть массив объектов:

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
  ];
  
  // Создайте на основе страрого массива новый массив объектов по образу:
  // [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

  const newCars = cars.map((value) => {
    const car = {
        brand:value.brand,
        isDiesel:value.isDiesel
    }
    return car;
  });
  console.log(newCars);


  console.log("===============================");
  const newCars2 = cars.map((value) => {
    const {brand, isDiesel} = value;
    return {brand, isDiesel};
  });
  console.log(newCars2);


console.log("===============================");
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((value, index, array) => {
  return value * 2;
});
console.log(newNumbers);

