interface Mountain {
  name: string,
  height: number
}

let mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  }
]

const findNameOfTallestMountain = (mountains: Mountain[]): string => {
  let tallestMountain = mountains[0];
  mountains.forEach(mountain => {
    if (mountain.height > tallestMountain.height) {
      tallestMountain = mountain;
    }
  })
  return tallestMountain.name
}
let tallestMountain = findNameOfTallestMountain(mountains)
console.log(tallestMountain)

interface Product {
  name: string,
  price: number
}

let products: Product[] = [
  {
    name: "basic",
    price: 1
  },
  {
    name: "rich bitch",
    price: 100
  },
  {
    name: "trump steak",
    price: 1000
  }
];

const calcAverageProductPrice = (products: Product[]): number => {
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += product.price
  });
  return totalPrice / products.length;
};
let averagePrice = calcAverageProductPrice(products)
console.log(averagePrice)

interface InventoryItem {
  product: Product,
  quantity: number
}

let inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10.00 },
    quantity: 10
  },
  {
    product: { name: "sensor", price: 12.50 },
    quantity: 4
  },
  {
    product: { name: "LED", price: 1.00 },
    quantity: 20
  }
]

const calcInventoryValue = (inventory: InventoryItem[]): number => {
  let totalPrice = 0;
  inventory.forEach((item) => {
    totalPrice += item.product.price * item.quantity;
  });
  return totalPrice
}
let inventoryValue = calcInventoryValue(inventory)
console.log(inventoryValue)