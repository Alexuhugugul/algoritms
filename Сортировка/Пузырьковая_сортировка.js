const array = [0, 34, 6, 3, 78, -7, 2, -8, 4, 0, 2, 7, 9, 789, 99, -99];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }

  return array;
};

console.log(bubbleSort(array));
