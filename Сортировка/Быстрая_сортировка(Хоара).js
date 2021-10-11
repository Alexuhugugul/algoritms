const array = [0, 34, 6, 3, 78, -7, 2, -8, 4, 0, 2, 7, 9, 789, 99, -99];

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex]; //Опорное значение
  let less = []; //Числа меньше чем опорные
  let greater = []; //Числа больше чем опорные

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(array));
