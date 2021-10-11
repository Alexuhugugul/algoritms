const array = [2, 3, 6, 7, 9, 10, 45, 7, 4];

/**
 *
 * @param {Array} array Массив в котором происходит поиск
 * @param {number} item Элемент который нужно найти
 */
function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 6));
