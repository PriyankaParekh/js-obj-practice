let arr = [
    { name: "pri", grade: 30 },
    { name: "may", grade: 50 },
    { name: "priyanka", grade: 70 },
  ];
  
  arr.reduce((acc, curr) => {return acc + curr['grade'] / arr.length},0);

  