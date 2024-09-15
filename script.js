function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];

  const less = [];
  const equal = [];
  const greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else if (arr[i] === pivot) {
      equal.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

const arr = [3, 6, 8, 10, 1, 2, 1];
console.log("Sorted array:", quickSort(arr));
function iterativeQuickSort(arr) {
  let stack = [];

  stack.push(0);
  stack.push(arr.length - 1);

  while (stack.length > 0) {
    let end = stack.pop();
    let start = stack.pop();

    if (start < end) {
      let pivotIndex = partition(arr, start, end);

      stack.push(start);
      stack.push(pivotIndex - 1);

      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }

  return arr;
}

function partition(arr, start, end) {
  let pivot = arr[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
  return i + 1;
}

const arr2 = [3, 6, 8, 10, 1, 2, 1];
console.log("Sorted array (iterative):", iterativeQuickSort(arr2));
