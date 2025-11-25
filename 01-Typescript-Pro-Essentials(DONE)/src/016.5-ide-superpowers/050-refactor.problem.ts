const func = () => {
  const rando = Math.random() * 100;
  // Refactor this to be its own function
  const randomPercentage = `${rando.toFixed(2)}%`;

  console.log(randomPercentage);
};
