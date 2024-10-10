const cart = [];

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

function loadCart() {
  const cartString = localStorage.getItem("cart");
  const items = JSON.parse(cartString);
  for (const item of items) {
    cart.push(new Roll(item.type, item.glazing, Number.parseInt(item.size), Number.parseFloat(item.basePrice)));
  }
}

const GLAZING_OPTIONS = {
  keep_original: {
    price_adjustment: 0,
    name: "Keep original",
  },
  sugar_milk: {
    price_adjustment: 0,
    name: "Sugar milk",
  },
  vanilla_milk: {
    price_adjustment: 0.5,
    name: "Vanilla milk",
  },
  double_chocolate: {
    price_adjustment: 1.5,
    name: "Double chocolate",
  },
};

const ROLLS = {
  Original: {
    basePrice: 2.49,
    imageFile: "original-cinnamon-roll.jpg",
  },
  Apple: {
    basePrice: 3.49,
    imageFile: "apple-cinnamon-roll.jpg",
  },
  Raisin: {
    basePrice: 2.99,
    imageFile: "raisin-cinnamon-roll.jpg",
  },
  Walnut: {
    basePrice: 3.49,
    imageFile: "walnut-cinnamon-roll.jpg",
  },
  "Double-Chocolate": {
    basePrice: 3.99,
    imageFile: "double-chocolate-cinnamon-roll.jpg",
  },
  Strawberry: {
    basePrice: 3.99,
    imageFile: "strawberry-cinnamon-roll.jpg",
  },
};

const PACK_SIZE_OPTIONS = {
    1: 1,
    3: 3,
    6: 5,
    12: 10,
};

CART_ELEMENT = document.querySelector("div#cart");
TOTAL_PRICE_ELEMENT = document.querySelector(
  "div#checkout-box > div > h4.price",
);

function updateTotalPrice() {
  let totalPrice = 0;
  for (const item of cart) {
    totalPrice += calcPrice(
      ROLLS[item.type].basePrice,
      GLAZING_OPTIONS[item.glazing].price_adjustment,
      item.size,
    );
  }
  TOTAL_PRICE_ELEMENT.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function calcPrice(basePrice, glazingPrice, packPrice) {
  return (basePrice + glazingPrice) * PACK_SIZE_OPTIONS[packPrice];
}

function addItemToCart(item) {
  const itemElement = document.createElement("div");
  const itemDetail = document.createElement("div");
  itemElement.classList.add("cart-item");
  itemElement.innerHTML = `<img src="assets/products/${ROLLS[item.type].imageFile}" alt="${item.type} roll" />`;
  itemDetail.innerHTML = `
    <h4>${item.type} Cinnamon Roll</h4>
    <h4>Glazing: ${GLAZING_OPTIONS[item.glazing].name}</h4>
    <h4>Pack Size: ${item.size}</h4>
    <br />
    <h4 class="price">Price: $${calcPrice(
      ROLLS[item.type].basePrice,
      GLAZING_OPTIONS[item.glazing].price_adjustment,
      item.size,
    ).toFixed(2)}</h4>`;
  CART_ELEMENT.appendChild(itemElement);
  itemElement.appendChild(itemDetail);

  const removeButton = document.createElement("a");
  removeButton.classList.add("remove-button");
  removeButton.style.cursor = "pointer";
  removeButton.textContent = "Remove";
  removeButton.onclick = () => {
    cart.splice(cart.indexOf(item), 1);

    //update local storage cart after deleting from array
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(JSON.stringify(cart));

    updateCart();
    updateTotalPrice();
  };

  itemElement.appendChild(removeButton);
}

function emptyDOMCart() {
  CART_ELEMENT.innerHTML = "";
}

function updateCart() {
  emptyDOMCart();
  for (const item of cart) {
    addItemToCart(item);
  }
}

loadCart();
updateCart();
updateTotalPrice();