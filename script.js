"use strict";
let mountains = [
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
];
const findNameOfTallestMountain = (mountains) => {
    let tallestMountain = mountains[0];
    mountains.forEach((mountain) => {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    });
    return tallestMountain.name;
};
let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
let products = [
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
const calcAverageProductPrice = (products) => {
    let totalPrice = 0;
    products.forEach((product) => {
        totalPrice += product.price;
    });
    let averagePrice = totalPrice / products.length;
    return averagePrice;
};
let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
let inventory = [
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
];
const calcInventoryValue = (inventory) => {
    let totalPrice = 0;
    inventory.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
};
let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
