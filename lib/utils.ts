export function getRandomId() {
  const length = 5;
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getRandomPriceAmount(min: number, max: number) {
  return parseFloat((Math.random() * (max - min + 1) + min).toFixed(2));
}

export function getRandomFood() {
  const food = ["Hamburguesa", "Soda", "Patatas", "Postre", "Combo"];
  const num = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
  return food[num];
}

export function getRandomInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
