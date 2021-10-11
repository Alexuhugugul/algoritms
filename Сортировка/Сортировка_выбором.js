const array = [0, 34, 6, 3, 78, -7, 2, -8, 4, 0, 2, 7, 9, 789, 99, -99];

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i; //Хранит индекс минимального значения в массиве

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
};

console.log(selectionSort(array));
