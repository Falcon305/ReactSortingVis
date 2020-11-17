const insertionSort = (array,  position, arraySteps, colorSteps) => {
  let colorKey = colorSteps[colorSteps.length - 1].slice();
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    let j;

    for (j = i - 1; j >= 0 && array[j] > el; j--) {
      array[j + 1] = array[j];
      arraySteps.push(array.slice());
      colorKey[j] = 1;
      colorKey[j + 1] = 1;
      colorSteps.push(colorKey.slice());
      colorKey[j] = 0;
      colorKey[j + 1] = 0;
    }
    array[j + 1] = el;
    colorKey[array.length - 1 - i] = 2;
    arraySteps.push(array.slice());
    colorSteps.push(colorKey.slice());
  }
  
}

export default insertionSort;
