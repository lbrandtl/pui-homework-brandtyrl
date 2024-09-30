const cart = [];

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing =  rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
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
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

  let basePrice = 2.49;
  
  const PACK_SIZE_OPTIONS = {
    1: 1,
    3: 3,
    6: 5,
    12: 10,
  };
  
  const GLAZING_SELECT_ELEMENT = document.querySelector("select#glazing-choices");
  const PACK_SIZE_SELECT_ELEMENT = document.querySelector(
    "select#pack-size-choices",
  );
  const PRICE_ELEMENT = document.querySelector("span#total-price");
  
  function updatePrice(basePrice, glazingPrice, packPrice) {
    const price = (basePrice + glazingPrice) * packPrice;
    PRICE_ELEMENT.textContent = `$${price.toFixed(2).toString()}`;
  }
  
  for (const option of Object.values(GLAZING_OPTIONS)) {
    const optionElement = document.createElement("option");
    optionElement.value = option.price_adjustment;
    optionElement.textContent = option.name;
  
    GLAZING_SELECT_ELEMENT.appendChild(optionElement);
  }
  
  for (const [size, value] of Object.entries(PACK_SIZE_OPTIONS)) {
    const optionElement = document.createElement("option");
  
    optionElement.value = value;
    optionElement.textContent = size;
  
    PACK_SIZE_SELECT_ELEMENT.appendChild(optionElement);
  }
  
  GLAZING_SELECT_ELEMENT.addEventListener("change", () => {
    updatePrice(
      basePrice,
      Number.parseFloat(GLAZING_SELECT_ELEMENT.value),
      PACK_SIZE_SELECT_ELEMENT.value,
    );
  });
  
  PACK_SIZE_SELECT_ELEMENT.addEventListener("change", () => {
    updatePrice(
      basePrice,
      Number.parseFloat(GLAZING_SELECT_ELEMENT.value),
      PACK_SIZE_SELECT_ELEMENT.value,
    );
  });

  const DETAIL_IMG = document.querySelector("img#detail-img");
  const DETAIL_TITLE = document.querySelector("h1#detail-title");

  
  const urlParams = new URLSearchParams(window.location.search);
  const rollName = toTitleCase(urlParams.get("roll"));

  function toTitleCase(s){
    return s.replace(/\b\w/g, (c) => c.toUpperCase());
  }

  if (rollName in ROLLS) {
    basePrice = ROLLS[rollName].basePrice;
    DETAIL_IMG.src = `assets/products/${ROLLS[rollName].imageFile}`;
    DETAIL_IMG.alt = rollName;
    DETAIL_TITLE.textContent = `${rollName} Cinammon Roll`;
  }

  updatePrice(
    basePrice,
    Number.parseFloat(GLAZING_SELECT_ELEMENT.value),
    PACK_SIZE_SELECT_ELEMENT.value,
  );

  const ADD_TO_CART_BUTTON = document.querySelector("button#cart-button");

  ADD_TO_CART_BUTTON.addEventListener("click", () => {
    const roll = new Roll(
      rollName,
      GLAZING_SELECT_ELEMENT.children[
        GLAZING_SELECT_ELEMENT.selectedIndex
      ].textContent,
      Number.parseInt(PACK_SIZE_SELECT_ELEMENT.value),
      basePrice,
    );

    cart.push(roll);
    console.log(cart);
  });