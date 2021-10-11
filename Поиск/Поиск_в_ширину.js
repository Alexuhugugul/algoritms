const graph = {
  a: ["b", "c"],
  b: ["f"],
  c: ["d", "e"],
  d: ["f"],
  e: ["f"],
  f: ["g"],
};

const breadthSearch = (graph, start, end) => {
  let queue = []; //Очередь
  queue.push(start);
  while (queue.length > 0) {
    const current = queue.shift(); //берем первый элемент из очереди
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }

  return false;
};

console.log(breadthSearch(graph, "a", "n"));
