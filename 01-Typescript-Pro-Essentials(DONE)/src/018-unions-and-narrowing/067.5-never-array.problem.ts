type shoppingCart = {
  items: string[]
}

const shoppingCart: shoppingCart = {
  items: [],
};

console.log(shoppingCart.items);

shoppingCart.items.push("Apple");
shoppingCart.items.push("Banana");
