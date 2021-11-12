const helloYou = (name) => {
  const otherName = 'you' || name;
  console.log(`hello${otherName}!`);
};

console.log(helloYou);
