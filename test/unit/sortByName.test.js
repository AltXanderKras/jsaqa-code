const sorting = require("../../app");

describe("Books names sorting", () => {
  it("should sort book names in ascending order", () => {
    const books = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const sortedBooks = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    expect(sorting.sortByName(books)).toEqual(sortedBooks);
  });

  it("should return an empty array for an empty input array", () => {
    expect(sorting.sortByName([])).toEqual([]);
  });

  it("should return an empty array for null input", () => {
    expect(sorting.sortByName(null)).toEqual([]);
  });

  it("should return an empty array for undefined input", () => {
    expect(sorting.sortByName(undefined)).toEqual([]);
  });

  it("should correctly sort when array elements have different case letters", () => {
    const mixedCaseArray = ["apple", "Banana", "cherry"];
    const sortedArray = ["apple", "Banana", "cherry"];

    expect(sorting.sortByName(mixedCaseArray)).toEqual(sortedArray);
  });

  it("should correctly sort an array with duplicate elements", () => {
    const arrayWithDuplicates = ["apple", "apple", "banana"];
    const sortedArray = ["apple", "apple", "banana"];

    expect(sorting.sortByName(arrayWithDuplicates)).toEqual(sortedArray);
  });
});
