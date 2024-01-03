function sortByName(inputArray) {
  if (!inputArray || !Array.isArray(inputArray)) {
    return [];
  }
  inputArray.sort(function (a, b) {
    var nameA = a.toLowerCase(),
      nameB = b.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return inputArray;
}

module.exports = { sortByName };
