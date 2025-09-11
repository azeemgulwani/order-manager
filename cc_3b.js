// Coding Challenge 3b

// Step 2: Model the Inventory
let inventory = [
{sku: "SKU-001", name:"Eco Bottle", price:19.99, stock:27},
{sku: "SKU-002", name:"Bamboo Toothbrush", price:4.49, stock:20},
{sku: "SKU-003", name:"Reusable Straw Set", price:9.99, stock:18},
{sku: "SKU-004", name:"Canvas Tote", price:13.99, stock:25},
];

// Summary of Products
inventory.forEach(obj => console.log(`${obj.sku}\t|\t ${obj.name}\t|\t $${obj.price}\t|\t Stock: ${obj.stock}`));

// Step 3: Manage Inventory Changes

inventory.push({sku:"SKU-005", name: "Food Container Set", price:24.49, stock:21});
inventory.pop();

// Update Price
inventory[1].price = 3.49;

// Update stock
inventory[2].stock = 21;

